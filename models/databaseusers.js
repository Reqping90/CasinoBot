const {Schema,model}=require("mongoose")
const mongoose = require("mongoose")
require('mongoose-long')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

module.exports = model("Database Users", Schema({
id: { type: String, required: true },
coins: { type: Number, default: 0},
status_playing: { type: String, default: "no"},
dailytime: {type: Date, default: () => new Date('2000-08-02T01:33:12.000Z')},
lastWithdrawal: {type: Date, default: null},
premiumExpires: {type: Date, default: () => new Date('2000-08-02T01:33:12.000Z')},
withdraw_amount: {type: Number, default: 0},
withdraw_accepted: {type: Boolean, default: false},
withdrawmessages: {type: [[String]], default: [[]]},
prembank: {type: Number, default: 0},
friends: { type: [String], default: [] },
challenge: {type: String, default: "general"},
blocked: { type: [String], default: [] },
challengesnumber: { type: Number, default: 0 },       // عدد التحديات
winnumber: { type: Number, default: 0 },       // عدد مرات الفوز
losenumber: { type: Number, default: 0 },       // عدد مرات الخساره
tienumber: { type: Number, default: 0 },      // عدد مرات التعادل
totalwinnings: { type: Number, default: 0 },       // اجمالي الربح
totallost: { type: Number, default: 0 },       // اجمالي الخساره
incomingtransactions: { type: Number, default: 0 },       // التحويلات الوارده
outcomingtransactions: { type: Number, default: 0 },
takribimessages: {type: [String], default: []},
privchannels: {type: [String], default: []},
cashback: {type: Number, default: 0},
totaltopup: {type: Number, default: 0},
points: {type: Number, default: 0},
totalwithdraw: {type: Number, default: 0},
redeemedcodes: {type: [String], default: []},
premium: {type: Boolean, default: false},
lastbetvsbot: {type: Number, default: null},
lastresvsbot: {type: String, default: null}
}));