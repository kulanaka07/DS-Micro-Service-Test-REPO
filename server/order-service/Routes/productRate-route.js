const router = require("express").Router();
const productRateController = require("../Controllers/productRate-controller");

//add new product rate
router.post("/addProductRate", productRateController.addProductRate);

//getting all product rates
router.get("/productRates", productRateController.getProductRate);

//get product rate by id
router.get("/getProductRate/:id", productRateController.getProductRateById);

//update product rate
router.put("/update/:id", productRateController.updateProductRate);

//delete product rate
router.delete("/delete/:id", productRateController.deleteProductRate);

module.exports = router;

