const {Schema,model}=require("mongoose")

module.exports = model("Clans", Schema({
clanname: { type: String, required: true },
ownerid: { type: String, required: true },
members: { type: [String], default: [] }
}));