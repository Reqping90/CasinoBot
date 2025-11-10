const mongoose = require('mongoose');

const pvpMinesweeperSchema = new mongoose.Schema({
    player1: {
        userId: String,
        score: { type: Number, default: 0 },
    },
    player2: {
        userId: String,
        score: { type: Number, default: 0 },
    },
    currentPlayer: { type: String, enum: ['player1', 'player2'], default: 'player1' },
    correctButtons: [Number],
    buttonStates: [String], // Stores states like 'SUCCESS', 'DANGER', or 'PRIMARY'
    betAmount: { type: Number, required: true },
    gameStartedAt: { type: Date, default: Date.now },
    gameStatus: { type: String, enum: ['active', 'ended'], default: 'active' },
    messageId: {type: String, required: true}
});

const PvpMinesweeper = mongoose.model('PvpMinesweeper', pvpMinesweeperSchema);

module.exports = PvpMinesweeper;