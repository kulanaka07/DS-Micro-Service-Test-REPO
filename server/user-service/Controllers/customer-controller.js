const Customer = require("../Models/customer");

//update information of customer
const updateCustomer = async (req, res, next) => {
  let cusId = req.params.id;

  const { CustomerName, CustomerEmail, ContactNum, Address, CusUsername } =
    req.body;

  const updateCustomer = {
    CustomerName,
    CustomerEmail,
    ContactNum,
    Address,
    CusUsername,
  };

  //check if the member to be updated exists
  const update = await Customer.findByIdAndUpdate(cusId, updateCustomer)
    .then(() => {
      res.status(200).send({ status: "Customer Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error in updating customer", error: err.message });
    });
};

//delete user
const deleteCustomer = async (req, res, next) => {
  let cusId = req.params.id;

  await Customer.findByIdAndDelete(cusId)
    .then(() => {
      res.status(200).send({ status: "Customer Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error in deleting customer", error: err.message });
    });
};

//get all customers
const getAllCustomers = async (req, res, next) => {
  Customer.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllCustomers = getAllCustomers;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
