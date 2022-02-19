const express = require("express");
const auth = require("../middleware/auth.middleware");
const Order = require("../models/Order");
const router = express.Router({ mergeParams: true });

router.route("/").get(auth, async (req, res) => {
  try {
    const { orderBy, equalTo } = req.query;
    const list = await Order.find({ [orderBy]: equalTo });
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
