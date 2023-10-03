const Razorpay = require("razorpay");
const axios = require("axios"); // Import axios library


exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.query;
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 0,
    };

    instance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(500).json({
          message: "Something Went Wrong in  create order 1",
        });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong in create order 2",
    });
  }
};



exports.capture = async (req, res) => {
  try {
    const { amount, paymentId } = req.body;
    console.log(paymentId, amount);

    const captureOptions = {
      amount: amount * 100,
    };

    const captureUrl = `https://api.razorpay.com/v1/payments/${paymentId}/capture`;

    const captureResponse = await axios.post(captureUrl, captureOptions, {
      auth: {
        username: process.env.RAZORPAY_KEY_ID,
        password: process.env.RAZORPAY_KEY_SECRET,
      },
    });

    console.log("Capture Response:", captureResponse.data);
    return res.status(200).json(captureResponse.data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Something Went Wrong capture 2",
    });
  }
};