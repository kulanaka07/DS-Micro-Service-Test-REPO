let Delivery = require("../Models/Delivery");
const { route } = require("../Routes/delivery-route");

// GET /deliveries - Get all deliveries
exports.getDeliveries = async (req, res, next) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (error) {
    next(error);
  }
};

// GET /deliveries/:id - Get a delivery by ID
exports.getDeliveryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const delivery = await Delivery.findById(id);
    if (!delivery) {
      res.status(404).send("Delivery not found");
      return;
    }
    res.status(200).json(delivery);
  } catch (error) {
    next(error);
  }
};

// POST /deliveries - Create a new delivery
exports.createDelivery = async (req, res, next) => {
  const { deliveryAddress, tot, customerName, customerPhone } = req.body;
  try {
    const delivery = new Delivery({
      deliveryAddress,
      tot,
      customerName,
      customerPhone,
    });
    const savedDelivery = await delivery.save();
    res.status(201).json(savedDelivery);
  } catch (error) {
    next(error);
  }
};

// PUT /deliveries/:id - Update a delivery by ID
exports.updateDelivery = async (req, res, next) => {
  const { id } = req.params;
  const { deliveryAddress, tot, customerName, customerPhone } = req.body;
  try {
    const delivery = await Delivery.findByIdAndUpdate(
      id,
      { deliveryAddress, tot, customerName, customerPhone },
      { new: true }
    );
    if (!delivery) {
      res.status(404).send("Delivery not found");
      return;
    }
    res.status(200).json(delivery);
  } catch (error) {
    next(error);
  }
};

// DELETE /deliveries/:id - Delete a delivery by ID
exports.deleteDelivery = async (req, res, next) => {
  const { id } = req.params;
  try {
    const delivery = await Delivery.findByIdAndDelete(id);
    if (!delivery) {
      res.status(404).send("Delivery not found");
      return;
    }
    res.status(200).json(delivery);
  } catch (error) {
    next(error);
  }
};
