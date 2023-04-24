let ProductRate = require("../Models/ProductRate");
const { route } = require("../Routes/productRate-route");

//add product rate
exports.addProductRate = (req, res) => {
  const { customerName, productName, rate, comment, date } = req.body;
  const newProductRate = new ProductRate({
    customerName,
    productName,
    rate,
    comment,
    date,
  });

  newProductRate
    .save()
    .then(() => {
      res.json("Product Rate Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//get all product rates
exports.getProductRate = (req, res) => {
  let productRateId = req.params.id;
  ProductRate.find()
    .then((productRates) => {
      res.json(productRates);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get product rate by id
exports.getProductRateById = (req, res) => {
  let productRateId = req.params.id;
  const productRate = ProductRate.findById(productRateId)
    .then((productRate) => {
      res.status(200).send({ status: "Product Rate Fetched", productRate });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get product rate", error: err.message });
    });
};

//update product rate
exports.updateProductRate = async (req, res) => {
  let productRateId = req.params.id;
  const { customerName, productName, rate, comment, date } = req.body;

  const updateProductRate = {
    customerName,
    productName,
    rate,
    comment,
    date,
  };

  const update = await ProductRate.findByIdAndUpdate(
    productRateId,
    updateProductRate
  )
    .then(() => {
      res.status(200).send({ status: "Product Rate Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
};

//delete product rate
exports.deleteProductRate = async (req, res) => {
  let productRateId = req.params.id;
  await ProductRate.findByIdAndDelete(productRateId)
    .then(() => {
      res.status(200).send({ status: "Product Rate Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete product rate", error: err.message });
    });
};
