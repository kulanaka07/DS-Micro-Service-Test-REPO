const Seller = require("../Models/seller");

//update information of seller
const updateSeller = async (req, res, next) => {
  let sellId = req.params.id;

  const { SellerName, SellerEmail, SellerUsername, SellerPassword } = req.body;

  const updateSeller = {
    SellerName,
    SellerEmail,
    SellerUsername,
    SellerPassword,
  };

  //check if the seller to be updated exists
  const update = await Seller.findByIdAndUpdate(sellId, updateSeller)
    .then(() => {
      res.status(200).send({ status: "Seller Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error in updating customer", error: err.message });
    });
};

//delete user
const deleteSeller = async (req, res, next) => {
  let sellId = req.params.id;

  await Seller.findByIdAndDelete(sellId)
    .then(() => {
      res.status(200).send({ status: "Seller Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error in deleting customer", error: err.message });
    });
};

//get all sellers
const getAllSellers = async (req, res, next) => {
  Seller.find()
    .then((sellers) => {
      res.json(sellers);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateSeller = updateSeller;
exports.deleteSeller = deleteSeller;
exports.getAllSellers = getAllSellers;
