const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [],
});



const reviewSchema = new Schema({
  comment: { type: String, maxlength: 200 },
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
});

module.exports = mongoose.model("Room", RoomSchema);
