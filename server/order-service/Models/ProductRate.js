//product rate model
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductRateSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },

  rate: {
    type: Number,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  date: {
    type: String,
  },
});

module.exports = ProductRate = mongoose.model("productRate", ProductRateSchema);
