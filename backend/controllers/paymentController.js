const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const StripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(StripeKey);


// Create Payment   =>   /api/v1/payment
exports.payment = catchAsyncErrors(async (req, res, next) => {
  console.log("logged in payment controller");
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Pak Real Construction",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment ", payment);
    res.status(200).json({
      success: true,
      message: "Payment Sucessful",
    });
  } catch (error) {
    console.log("Stripe Error", error);
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});
