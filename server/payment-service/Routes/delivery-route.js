const express = require("express");
const router = express.Router();
const deliveryController = require("../Controllers/delivery-controller");

// Define routes
router.get("/deliveries", deliveryController.getDeliveries);
router.get("/deliveries/:id", deliveryController.getDeliveryById);
router.post("/deliveries", deliveryController.createDelivery);
router.put("/deliveries/:id", deliveryController.updateDelivery);
router.delete("/deliveries/:id", deliveryController.deleteDelivery);

module.exports = router;
