import express from "express";
import {createPaymentIntent} from "../controllers/payment.js";

const app = express.Router();


// route - /api/v1/payment/create
app.post("/create", createPaymentIntent);



export default app;