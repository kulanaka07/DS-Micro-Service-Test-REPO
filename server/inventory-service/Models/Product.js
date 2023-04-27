//this model is for the products

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({

   

    productID:{ // ID of the product
        type: String,
        required: true
        
    },

    productName:{ // name of the product
        type: String,
        required: true
    },

    quantity:{ // quantity of the product
        type: String,
        required: true
    },

    type:{ // type of the product (mens clothing or womens clothing)
        type: String,
        required: true
    },

    color:{ // color of the product
        type: String,
        required: true
    },

    size:{ // size of the product
        type: String,
        required: true
    },

    productDescription:{ // description of the product
        type: String,
        required: true
    }


})

const product = mongoose.model("product", productSchema); 
module.exports = product;
