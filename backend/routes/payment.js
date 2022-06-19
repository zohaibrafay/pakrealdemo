// const express = require("express");
// const router = express.Router();

// const { payment } = require("../controllers/paymentController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

// router.route("/payment").post(payment);

// module.exports = router;


const express = require('express')
const router = express.Router();

const {
    processPayment,
    sendStripApi
} = require('../controllers/paymentController')

const { isAuthenticatedUser } = require('../middlewares/auth')

router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/stripeapi').get(isAuthenticatedUser, sendStripApi);

module.exports = router;