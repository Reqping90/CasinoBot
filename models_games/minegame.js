const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    messageId: String,
    players: [String], // Player IDs
    turn: Number,
    correctButtonId: String,
    correctButtonIndex: Number,
    betAmount: Number // New field for bet amount
});

module.exports = mongoose.model('minegame', gameSchema);