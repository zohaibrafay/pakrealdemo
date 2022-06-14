const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/errors");

app.use(express.json({ limit: "50mb" }));
app.use(
  bodyparser.json({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(
  bodyparser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(fileUpload());

//import all routes
const products = require("./routes/product");
const packages = require("./routes/package");
const auth = require("./routes/auth");
const order = require("./routes/order");
const video = require("./routes/video");
const labour = require("./routes/labor");
const vehicle = require("./routes/vehicle");
const payment = require("./routes/payment");
const coupon = require("./routes/coupon");

app.use("/api/v1", products);
app.use("/api/v1", packages);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", video);
app.use("/api/v1", labour);
app.use("/api/v1", vehicle);
app.use("/api/v1", payment);
app.use("/api/v1", coupon);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

//Middleware to handle errors
app.use(errorMiddleware);
module.exports = app;
