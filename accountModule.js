const mongoose = require('mongoose');

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