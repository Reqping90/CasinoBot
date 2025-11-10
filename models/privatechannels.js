const {Schema,model}=require("mongoose")

module.exports = model("Private Channels", Schema({
channelid: { type: String, required: true },
owner: { type: String, required: true},
expiredate: {type: Date, required: true},
announcemessageid: {type: String, required: true},
addedmembers: {type: [String], default: []}
}));