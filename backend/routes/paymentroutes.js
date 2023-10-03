const express = require("express");
const paymentcontrol = require('../controller/payment_controller');
const PaymentRouter = express.Router();

PaymentRouter
.get("/order", paymentcontrol.createOrder)
.post("/capture",paymentcontrol.capture);


exports.routes = PaymentRouter;