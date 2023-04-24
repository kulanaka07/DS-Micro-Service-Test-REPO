//admin controller

const Admin = require("./../Models/Admin");

const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "MyKey";

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingAdmin;

  try {
    existingAdmin = await Admin.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }

  if (existingAdmin) {
    return res
      .status(400)
      .json({ message: "Admin already exists. Login instead." });
  }

  const hashedPassword = bycrypt.hashSync(password);

  const admin = new Admin({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await admin.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: admin });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email: email });
  } catch (err) {
    return new Error(err);
  }

  if (!existingAdmin) {
    return res
      .status(400)
      .json({ message: "Invalid credentials. Please try again." });
  }

  const isValidPassword = bycrypt.compareSync(password, existingAdmin.password);

  if (!isValidPassword) {
    return res
      .status(400)
      .json({ message: "Invalid credentials. Please try again." });
  }

  const token = jwt.sign({ id: existingAdmin._id }, JWT_SECRET_KEY, {
    expiresIn: "30s",
  });

  res.cookie(String(existingAdmin._id), token, {
    path: "/",
    expires: new Date(Date.now() + 3600000),
    httpOnly: true,
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "Logged in successfully.",
    admin: existingAdmin,
    token: token,
  });
};

const verifyToken = (req, res, next) => {
  const cookie = req.headers.cookie;
  const token = cookie.split("=")[1];
  console.log(token);

  if (!token) {
    return res.status(403).json({ message: "No token provided." });
  }
  jwt.verify(String(token), JWT_SECRET_KEY, (err, admin) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
    console.log(admin.id);
    req.id = admin.id;
  });
  next();
};

const getAdmin = async (req, res, next) => {
  const adminId = req.id;
  let admin;

  try {
    admin = await Admin.findById(adminId, "-password");
  } catch (err) {
    return new Error(err);
  }
  if (!admin) {
    return res.status(404).json({ message: "Admin not found." });
  }
  return res.status(200).json({ admin });
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getAdmin = getAdmin;
