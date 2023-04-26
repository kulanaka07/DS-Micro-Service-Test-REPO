//model to store data of buyer/customer
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  CustomerName: {
    type: String,
    required: true,
  },
  CustomerEmail: {
    type: String,
    required: true,
  },
  ContactNum: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  CusUsername: {
    type: String,
    required: true,
  },
  CusPassword: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
