const {Schema,model}=require("mongoose")

module.exports = model("Database Sahb", Schema({
kombe: { type: Number, default: 20000000},
yesorno: { type: String, default: "no"},
dailylimit: {type: Number, default: 20000000},
lastWithdrawal: {type: Date, default: null},
sahbsett: {type: String, default: "taw9it"}
}));