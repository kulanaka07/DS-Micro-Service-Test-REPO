//model to store data of seller
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  SellerName: {
    type: String,
    required: true,
  },
  SellerEmail: {
    type: String,
    required: true,
  },
  SellerUsername: {
    type: String,
    required: true,
  },
  SellerPassword: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
