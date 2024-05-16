import { stripe } from "../index.js";


export const createPaymentIntent = async (req, res, next) => {
    try {
        const { amount } = req.body;

        if (!amount) {
            return res.status(400).json({ msg: "Please enter amount" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: "inr",
        });

        return res.status(201).json({
            success: true,
            clientSecret: paymentIntent.client_secret,
        });

    } catch (error) {
        res.status(500).json({ error: 'Failed to create payment intent' });
    }
};