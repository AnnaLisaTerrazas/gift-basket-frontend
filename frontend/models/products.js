//Require Mongoose
var mongoose = require("mongoose");
const shortid = require("shortid");

// Define schema
var Schema = mongoose.Schema;


var Product = new Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
});

// Compile model from schema
var OrderModel = mongoose.model("products", Product);

module.exports = OrderModel;
