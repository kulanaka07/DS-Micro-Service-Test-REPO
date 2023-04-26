//order route
const router = require("express").Router();
const orderController = require("../Controllers/order-controller");

//add new order
router.post("/addOrder", orderController.addOrder);

//getting all orders
router.get("/orders", orderController.getAllOrders);

//get order by id
router.get("/getOrder/:id", orderController.getOrderById);

//update order
router.put("/update/:id", orderController.updateOrder);

//delete order
router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;
