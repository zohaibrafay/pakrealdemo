// const ErrorHandler = require("../utils/errorHandler");
// const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
// const dotenv = require("dotenv");
// dotenv.config({ path: "backend/config/config.env" });
// const StripeKey = process.env.STRIPE_SECRET_KEY;
// const stripe = require("stripe")(StripeKey);


// // Create Payment   =>   /api/v1/payment
// exports.payment = catchAsyncErrors(async (req, res, next) => {
//   console.log("logged in payment controller");
//   const { id, amount } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Pak Real Construction",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("Payment ", payment);
//     res.status(200).json({
//       success: true,
//       message: "Payment Sucessful",
//     });
//   } catch (error) {
//     console.log("Stripe Error", error);
//     res.status(401).json({
//       success: false,
//       message: error,
//     });
//   }
// });


const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log('KEY',process.env.STRIPE_SECRET_KEY);

// Process stripe payments   =>   /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })

})