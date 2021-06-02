const express = require('express');
const dBModule = require('./dBModule');
const accountModule = require('./accountModule');
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

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    dBModule.storeInput(accountModule.createAccount(req.body.name, req.body.email, req.body.password));
    res.render('gallery');
});

app.get('/gallery', (req, res) => {
    res.render('gallery');
});

app.listen(port, () => console.log(`panic in port ${port}!`))