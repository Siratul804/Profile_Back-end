const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Subject: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", categorySchema);
