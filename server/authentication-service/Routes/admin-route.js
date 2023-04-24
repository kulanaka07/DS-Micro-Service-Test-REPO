//admin route

const express = require("express");
const {
  signup,
  verifyToken,
  getAdmin,
} = require("../Controllers/admin-controller");
const { login } = require("../Controllers/admin-controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/admin", verifyToken, getAdmin);
//veriy token
module.exports = router;
