const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    review: { type: String, required: true },
    // На чьей странице находится комментарий
    templateId: { type: String, required: true },
    // Кто оставил коммент
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rate: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Review", schema);
