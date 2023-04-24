//admin model

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
