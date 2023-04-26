const express = require("express");
const {
  cstsignup,
  verifyToken,
  getCustomer,
  cstlogin,
  logout,
} = require("../Controllers/customer-auth-controller");
const {
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
} = require("../Controllers/customer-controller");

const customerRouter = express.Router();

customerRouter.post("/signup", cstsignup);
customerRouter.post("/login", cstlogin);
customerRouter.post("/logout", verifyToken, logout);
customerRouter.get("/cus", verifyToken, getCustomer);
customerRouter.put("/update/:id", updateCustomer);
customerRouter.delete("/delete/:id", deleteCustomer);
customerRouter.get("/all", getAllCustomers);

module.exports = customerRouter;
