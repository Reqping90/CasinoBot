const { Schema, model } = require('mongoose');

module.exports = model("Nrd Users Game Database", Schema({
id: { type: String, default: null },
with: { type: String, default: null },
numbers: { type: Array, default: [] },
result: { type: String, default: 0},
attempt: { type: String, default: 0 }
}));