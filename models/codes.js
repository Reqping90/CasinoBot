const {Schema,model}=require("mongoose")

module.exports = model("Redeem Codes", Schema({
codestring: { type: String, required: true },
usecount: { type: Number, default: -1 },
amount: { type: String, required: true },
gifttype: { type: String, default: "c" }
}));