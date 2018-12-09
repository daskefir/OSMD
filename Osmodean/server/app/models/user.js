var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    id: Number,
    login: String,
    password: String
});
