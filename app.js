const express = require('express');

const app = express();
const port = 3000;
const ClientDir = __dirname + "\\client\\";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(ClientDir));

console.log(ClientDir);

app.get('/', (req, res) => {
    res.render(ClientDir + "ejs\\index.ejs")
});

app.listen(port, () => console.log(`panic in port ${port}!`))