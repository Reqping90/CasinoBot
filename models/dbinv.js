const { Schema, model } = require("mongoose");

// Define the schema for the invite database
const inviteSchema = new Schema({
    userId: { type: String, required: true, unique: true }, // User ID of the new member
    inviterName: { type: String, required: false } // Name of the user who invited them
});

// Export the model
module.exports = model("InviteDatabase", inviteSchema);