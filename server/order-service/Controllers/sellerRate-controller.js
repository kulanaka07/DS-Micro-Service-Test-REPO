let SellerRate = require("../Models/SellerRate");
const { route } = require("../Routes/sellerRate-route");

//add seller rate
exports.addSellerRate = (req, res) => {
  const { customerName, sellerName, rate, comment } = req.body;
  const newSellerRate = new SellerRate({
    customerName,
    sellerName,
    rate,
    comment,
  });

  newSellerRate
    .save()
    .then(() => {
      res.json("Seller Rate Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//get all seller rates
exports.getSellerRate = (req, res) => {
  let sellerRateId = req.params.id;
  SellerRate.find()
    .then((sellerRates) => {
      res.json(sellerRates);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get seller rate by id
exports.getSellerRateById = (req, res) => {
  let sellerRateId = req.params.id;
  const sellerRate = SellerRate.findById(sellerRateId)
    .then((sellerRate) => {
      res.status(200).send({ status: "Seller Rate Fetched", sellerRate });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get seller rate", error: err.message });
    });
};

//update seller rate
exports.updateSellerRate = async (req, res) => {
  let sellerRateId = req.params.id;
  const { customerName, sellerName, rate, comment } = req.body;

  const updateSellerRate = {
    customerName,
    sellerName,
    rate,
    comment,
  };

  const update = await SellerRate.findByIdAndUpdate(
    sellerRateId,
    updateSellerRate
  )
    .then(() => {
      res.status(200).send({ status: "Seller Rate Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
};

//delete seller rate
exports.deleteSellerRate = async (req, res) => {
  let sellerRateId = req.params.id;
  await SellerRate.findByIdAndDelete(sellerRateId)
    .then(() => {
      res.status(200).send({ status: "Seller Rate Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete seller rate", error: err.message });
    });
};
