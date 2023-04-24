const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const PORT = process.env.PORT || 8070;

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
  useCreateIndex: true;
  useNewUrlParser: true;
  useUnifiedTopology: true;
  useFindAndModify: true;
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection establishment is successful!!!");
});

//order route
const order_router = require("./Routes/order-route");
app.use("/order", order_router);

//product rate route
const productRate_router = require("./Routes/productRate-route");
app.use("/productRate", productRate_router);

//seller rate route
const sellerRate_router = require("./Routes/sellerRate-route");
app.use("/sellerRate", sellerRate_router);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
