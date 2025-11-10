const { model, Schema } = require('mongoose');

const TofehaGameSchema = new Schema({
    guildId: String,
    channelId: String,
    messageId: String,
    playerId: String,
    betAmount: Number,
    currentLevel: Number,
    winnings: Number,
    gameActive: Boolean,
    time: String,
    playedRows: [Number],
    pressedButtons: [{
        level: Number,
        index: Number,
        result: String
    }],
    buttonOrder: [[{
        id: String,
        index: Number,
        correct: Boolean
    }]]
});

module.exports = model('TofehaGame', TofehaGameSchema);
