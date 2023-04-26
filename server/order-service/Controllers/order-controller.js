//controller
let Order = require("../Models/Order");
//const ProductRate = require("../Models/ProductRate");
const { route } = require("../Routes/order-route");

exports.addOrder = (req, res) => {
  const { CustomerName, ProductName, quantity, orderDate, status } = req.body;
  const newOrder = new Order({
    CustomerName,
    ProductName,
    quantity,
    orderDate,
    status,
  });

  newOrder
    .save()
    .then(() => {
      res.json("Order Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//all orders
exports.getAllOrders = (req, res) => {
  Order.find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get order by id
exports.getOrderById = async (req, res) => {
  let orderId = req.params.id;

  const order = await Order.findById(orderId)
    .then((order) => {
      res.status(200).send({ status: "Order fetched", order });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get employee", error: err.message });
    });
};

//update order
exports.updateOrder = async (req, res) => {
  let oderId = req.params.id;

  const { CustomerName, ProductName, quantity, orderDate, status } = req.body;

  const updateOrder = {
    CustomerName,
    ProductName,
    quantity,
    orderDate,
    status,
  };

  const update = await Order.findByIdAndUpdate(oderId, updateOrder)
    .then(() => {
      res.status(200).send({ status: "Order Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
};

//delete order
exports.deleteOrder = async (req, res) => {
  let orderId = req.params.id;

  const orderUp = await Order.findByIdAndDelete(orderId)
    .then(() => {
      res.status(200).send({ status: "Order Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete order", error: err.message });
    });
};
