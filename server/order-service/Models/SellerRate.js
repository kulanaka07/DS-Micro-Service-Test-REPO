const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SellerRateSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },

  sellerName: {
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
});

module.exports = SellerRate = mongoose.model("sellerRate", SellerRateSchema);
