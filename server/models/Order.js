const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    goodsSold: {
      type: [
        {
          type: Object,
        },
      ],
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: String,
    amountPayable: Number,
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Order", schema);
