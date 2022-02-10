const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    FIoEU: {
      type: String,
      required: true,
    },
    paints: {
      type: Array,
    },
    templateId: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    coverage: {
      type: String,
    },
    description: {
      type: String,
    },
    linkTTX: {
      type: String,
    },
    product: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    sheenLevel: {
      type: String,
    },
    sortName: {
      type: String,
      required: true,
    },
    surface: {
      type: String,
    },
    amountCoat: {
      type: String,
    },
    advantages: {
      type: String,
    },
    countryOfOrigin: {
      type: String,
    },
    img: {
      type: String,
    },
    important: {
      type: String,
    },
    recoatTime: {
      type: String,
    },
    shelfLife: {
      type: String,
    },
    vocLevels: {
      type: String,
    },
    wos: {
      type: String,
    },
    lowestPrice: {
      type: Number,
    },
    reviews: {
      type: [
        {
          type: Object,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
