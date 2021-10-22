const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PicSchema = new Schema({
  url: {
    type: String,
  },
});

const Pic = mongoose.model("Pic", PicSchema);

module.exports = Pic;
