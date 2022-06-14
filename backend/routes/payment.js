const express = require("express");
const router = express.Router();

const { payment } = require("../controllers/paymentController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/payment").post(payment);

module.exports = router;
