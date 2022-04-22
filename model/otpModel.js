const { Schema, model } = require("mongoose");

const otpSchema = Schema(
  {
    number: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAT: { type: Date, default: Date.now, index: { expires: 300 } },
  },
  { timestamps: true }
);

module.exports.Otp = model("Otp", otpSchema);