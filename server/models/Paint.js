const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  paintId: {
    type: String,
    required: true,
  },
});

module.exports = model("Paint", schema);
