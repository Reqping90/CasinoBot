const { Schema, model } = require("mongoose");

// Define the schema for the invite database
const inviteSchema = new Schema({
    systemm: { type: String, default: "off"},
    spinsystem: { type: String, default: "off"},
    price: {type: Number, default: 1000000}
});

// Export the model
module.exports = model("InviteSystem", inviteSchema);