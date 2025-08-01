// const employeeController = require("../controllers/employeeController");
import employeeController from "../controllers/employeeController.js";

// const express = require("express");
import express from "express";
const router = express.Router();

router.post("/store", employeeController.store);
router.get("/all", employeeController.fetch_all);
router.get("/edit/:id", employeeController.fetch_one);
router.delete("/delete/:id", employeeController.destroy);
router.put("/update/:id", employeeController.update);

// module.exports = router;
export default router;
 