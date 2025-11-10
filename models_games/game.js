const { Schema, model } = require('mongoose');

module.exports = model("Game Database", Schema({
id: { type: String, required: true },
msgID: { type: String, default: null },
coins: { type: String, default: null },
with: { type: String, default: null },
game: { type: String, default: null },
channelID: { type: String, default: null },
time: { type: String, default: null },
}));