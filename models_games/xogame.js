const mongoose = require('mongoose');

const xogameSchema = new mongoose.Schema({
    messageId: String,
    playerX: String,
    playerO: String,
    currentPlayer: String,
    board: [[String]],
    bet: Number,
    lastMoveTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Xogame', xogameSchema);
