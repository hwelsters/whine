const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  img: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
