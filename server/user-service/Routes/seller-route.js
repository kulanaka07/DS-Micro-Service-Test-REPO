const express = require("express");
const {
  slrsignup,
  verifyToken,
  getSeller,
  slrlogin,
} = require("../Controllers/seller-auth-controller");
const {
  updateSeller,
  deleteSeller,
  getAllSellers,
} = require("../Controllers/seller-controller");

const sellerRouter = express.Router();

sellerRouter.post("/signup", slrsignup);
sellerRouter.post("/login", slrlogin);
sellerRouter.get("/sel", verifyToken, getSeller);
sellerRouter.put("/update/:id", updateSeller);
sellerRouter.delete("/delete/:id", deleteSeller);
sellerRouter.get("/all", getAllSellers);

module.exports = sellerRouter;
