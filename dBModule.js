const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/slutprojekt', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    //PogChamp
});

exports.storeInput = (input) => {
    input.save(() => {
        //console.log("PogChamp")
    });
};