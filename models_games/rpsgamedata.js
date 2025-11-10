const mongoose = require('mongoose');

const xogameSchema = new mongoose.Schema({
    messageId: String
});

module.exports = mongoose.model('Rpsdata', xogameSchema);