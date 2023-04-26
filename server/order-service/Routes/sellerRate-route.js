const router = require("express").Router();
const sellerRateController = require("../Controllers/sellerRate-controller");

//add new seller rate
router.post("/addSellerRate", sellerRateController.addSellerRate);

//get all seller rates
router.get("/sellerRates", sellerRateController.getSellerRate);

//get seller rate by id
router.get("/getSellerRate/:id", sellerRateController.getSellerRateById);

//update seller rate
router.put("/update/:id", sellerRateController.updateSellerRate);

///delete seller rate
router.delete("/delete/:id", sellerRateController.deleteSellerRate);

module.exports = router;
