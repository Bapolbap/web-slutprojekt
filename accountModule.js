const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const accountSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Account = mongoose.model('Account', accountSchema);

exports.createAccount = (name, email, password) => {
    var account = new Account({
        name: name,
        email: email,
        password: password
    });

    return account;
}

exports.findAccount = (name, email) => {
    const account = Account.find({name: name, email: email});
    return account;
}

exports.findAccountPassword = (name, email) => {
    const account = Account.find({name: name, email: email});
    return account.password
}