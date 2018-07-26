var mongoose = require('mongoose');

var User = mongoose.model('User', {  //with schema
    user: {
        type: String,
        trim: true,
        required: true,
        minlength: 1

    },
    email: {
        type: String,
        trim: true,
        minlength: 5,
        required: true
    }
});

module.exports = {User};