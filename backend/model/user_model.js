const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  identification_type: {
    type: String,
    enum: ["Adhar", "Passport"],
    required: true,
  },
  identification_number: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  count_children: {
    type: Number,
    default: 0,
  },
  count_adult: {
    type: Number,
    default: 0,
  },
  count_abroad: {
    type: Number,
    default: 0,
  },
  amount: { type: Number, required: true },
  paymentId: {
    type: String,
    required: true,
  },
});

exports.user = mongoose.model("user", userSchema);
