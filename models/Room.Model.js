const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [], 
});

module.exports = mongoose.model("Room", RoomSchema);
