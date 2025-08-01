// const mongoose = require("mongoose");
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  contact: Number,
  designation: String,
});

// module.exports = mongoose.model("Employee", schema);
export default mongoose.model("Employee", schema);
