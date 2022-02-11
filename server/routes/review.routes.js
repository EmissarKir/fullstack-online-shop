const express = require("express");
const auth = require("../middleware/auth.middleware");
const Review = require("../models/Review");
// const Product = require("../models/Product");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(async (req, res) => {
    try {
      // const { orderBy, equalTo } = req.query;
      // const list = await Review.find({ [orderBy]: equalTo });
      const list = await Review.find();
      res.send(list);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newReviews = await Review.create({
        ...req.body,
        userId: req.user._id,
      });
      // добавление нового свойства reviews в Product
      // const { templateId, rate } = req.body;
      // const filter = { templateId: templateId };
      // const update = { $push: { reviews: { userId: req.user._id, rate } } };
      // await Product.findOneAndUpdate(filter, update, { new: true });

      res.status(201).send(newReviews);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

module.exports = router;
