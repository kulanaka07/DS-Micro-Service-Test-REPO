const router = require("express").Router();
const productController = require("../Controllers/product-controller");


router.post("/addProduct", productController.addProduct);
router.get("/products", productController.getAllProducts);
router.get("/getProduct/:id", productController.getProductById);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;

