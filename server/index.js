import { config } from "dotenv";
import Stripe from "stripe";
import cors from "cors";
import express from "express";

const app = express();

// Importing Routes
import paymentRoute from "./routes/payment.js";

config({
    path: "./.env",
});

// middlewares
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 4000;
const stripeKey = process.env.STRIPE_KEY || "";


export const stripe = new Stripe(stripeKey);


app.use("/api/v1/payment", paymentRoute);


app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});