// const mongoose = require("mongoose");
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((e) => {
    console.log(e);
  });
