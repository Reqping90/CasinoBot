const mongoose = require("mongoose");

const TournamentSchema = new mongoose.Schema({
  owner: String,
  channelID: String,
  msgID: String,
  entry: Number,       // مبلغ الاشتراك لكل لاعب
  game: { type: String, default: "dice" }, // chosen game
  players: [String],   // array of user ids (strings)
  active: { type: Boolean, default: false },
  round: { type: Number, default: 1 },
  matches: [ {         // matches per round: array of {p1, p2, msgID, winner, status}
    p1: String,
    p2: String,
    msgID: String,
    winner: { type: String, default: null },
    status: { type: String, default: "pending" } // pending, ongoing, done
  }]
});

module.exports = mongoose.model("tournament", TournamentSchema);