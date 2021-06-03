const express = require('express');
const dBModule = require('./dBModule');
const bcrypt = require('bcrypt');
const accountModule = require('./accountModule');
const { exception } = require('console');
const app = express();
const port = 3000;
const ClientDir = __dirname + "\\client\\";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(ClientDir));

app.set('views', ClientDir + '\\ejs');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const account = accountModule.findAccount(req.body.name, req.body.email);
    if(account == undefined) {
        return res.status(400).send('could not find that user');
    }
    console.log(account.name);
    console.log(req.body.password)
    //try {
        if(await bcrypt.compare(req.body.password, account.password)) {
            res.render('gallery')
        } else {
            console.log("password or username was incorrect");
        }
    //} catch {
    //    console.log("something went wrong2");
    //}
})

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(req.body.password, salt);
        dBModule.storeInput(accountModule.createAccount(req.body.name, req.body.email, hashedpassword));
        res.render('gallery');
    } catch {
        console.log("something went wrong3");
    }
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.listen(port, () => console.log(`panic in port ${port}!`))