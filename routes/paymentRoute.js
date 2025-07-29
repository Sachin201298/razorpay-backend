import express from "express";
import { makePayment } from "../controllers/paymentController.js";
const router = express.Router();



router.post("/create-order", makePayment);

export { router };
