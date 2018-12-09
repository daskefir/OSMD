var mongoose = require('mongoose');

module.exports = mongoose.model('infoCompany', {
    id: Number,
    name: String,
    contacts: Object
});
