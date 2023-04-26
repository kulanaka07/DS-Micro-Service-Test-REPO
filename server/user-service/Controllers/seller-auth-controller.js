const Seller = require("../Models/seller");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//temporary secret key
const JWT_SECRET_KEY = "SellKey";

//function to sign up
const slrsignup = async (req, res, next) => {
  const { SellerName, SellerEmail, SellerUsername, SellerPassword } = req.body;
  let existingSeller;

  try {
    existingSeller = await Seller.findOne({
      SellerEmail: SellerEmail,
    });
  } catch (err) {
    console.log(err);
  }

  if (existingSeller) {
    return res.status(400).json({
      message: "User already exists, Login instead",
    });
  }

  //encrypt the password
  const hashPassword = bcrypt.hashSync(SellerPassword);

  const seller = new Seller({
    SellerName,
    SellerEmail,
    SellerUsername,
    SellerPassword: hashPassword,
  });

  //save the object to db document
  try {
    await seller.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({
    message: seller,
  });
};

//function to login
const slrlogin = async (req, res, next) => {
  const { SellerUsername, SellerPassword } = req.body;

  let existingSeller;
  try {
    existingSeller = await Seller.findOne({
      SellerUsername: SellerUsername,
    });
  } catch (err) {
    return new Error(err);
  }
  if (!existingSeller) {
    return res.status(400).json({
      message: "User not found. SignUp please",
    });
  }
  const isPasswordCorrect = bcrypt.compareSync(
    SellerPassword,
    existingSeller.SellerPassword
  );
  if (!isPasswordCorrect) {
    return res.status(400).json({
      message: "Invalid Username Password",
    });
  }

  //generate token
  const token = jwt.sign({ id: existingSeller._id }, JWT_SECRET_KEY, {
    expiresIn: "2h",
  });
  console.log("Generated Token\n", token);

  //after the token is created, we are sending the cookie
  res.cookie(String(existingSeller._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60), //60 seconds
    httpOnly: true,
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "Successfully logged in",
    seller: existingSeller,
    token,
  });
};

//verify the Seller token
const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  console.log(token);

  if (!token) {
    res.status(404).json({
      message: "No token found",
    });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, seller) => {
    if (err) {
      res.status(400).json({
        message: "Invalid token",
      });
    }
    console.log(seller.id);
    req.id = seller.id;
  });
  next();
};

//logout
const logout = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1].split(";")[0];
  console.log(cookies);

  if (!token) {
    res.status(404).json({ message: "No token found" });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, seller) => {
    if (err) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    res.clearCookie(seller.id);
    //req.cookies[user.id]=" "
    console.log(seller.id);
    req.id = seller.id;
    return res.status(200).json({ message: "successfully logout" });
  });
};

//get information of Seller
const getSeller = async (req, res, next) => {
  const selId = req.id;
  let seller;
  try {
    seller = await Seller.findById(selId, "-SellerPassword");
  } catch (err) {
    return new Error(err);
  }
  if (!seller) {
    return res.status(404).json({
      message: "Seller not found",
    });
  }
  return res.status(200).json({ seller });
};

exports.slrsignup = slrsignup;
exports.slrlogin = slrlogin;
exports.verifyToken = verifyToken;
exports.getSeller = getSeller;
exports.verifyToken = verifyToken;
