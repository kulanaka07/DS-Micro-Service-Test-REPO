const express = require("express");
const {
  cstsignup,
  cstlogin,
} = require("../Controllers/customer-auth-controller");
const customerRouter = express.Router();

customerRouter.post("/signup", cstsignup);
customerRouter.post("/login", cstlogin);

module.exports = customerRouter;
