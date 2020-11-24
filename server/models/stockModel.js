const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  ticker: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  price: {
    type: Number,
    required: true,
  },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
