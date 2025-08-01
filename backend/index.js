// const express = require("express");
import express from "express";
// require("dotenv").config();
import dotenv from "dotenv";
// require("./db");
import "./db.js";
// const cors = require("cors");
import cors from "cors";
dotenv.config();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// const employeeRouter = require("./routers/employeeRouter");
import employeeRouter from "./routers/employeeRouter.js";
app.use("/employee", employeeRouter);

app.listen(port, () => {
  console.log(`Your App is Running at ${port}`);
});

