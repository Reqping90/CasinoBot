const {Schema,model}=require("mongoose")

module.exports = model("Giveaways", Schema({
    id: { type: String, required: true },
    hostid: { type: String, required: true },
    winnumber: { type: Number, default: 1 },
    timetoend: {type: Date, required: true},
    winners: {type: [String], default: []}
}));