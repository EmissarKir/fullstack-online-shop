const express = require("express");
const Product = require("../models/Product");
const Order = require("../models/Order");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.post("/", async (req, res) => {
  const array = req.body.goodsSold;
  try {
    for (const product of array) {
      const { templateId, paintId, quantity } = product;

      //корректировка количества товара на складе
      await Product.updateOne(
        { templateId: templateId, "paints.paintId": paintId },
        {
          $inc: {
            "paints.$.count": -quantity,
          },
        }
      );
    }
    // создание заказа
    await Order.create({ ...req.body, status: "isWorking" });
    res.send({ success: true });
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:category", async (req, res) => {
  const productCategory = {
    paint: "краска",
    enamel: "эмаль",
    primer: "грунтовка",
    varnish: "лак",
    oilAndWaxes: "масло и воск",
    woodFinish: "лазурь",
  };
  const category = req.url.replace("/", "");
  if (productCategory[category]) {
    try {
      const products = await Product.find({
        productCategory: productCategory[category],
      });
      res.status(200).send(products);
    } catch (e) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  } else {
    res.status(404).json({
      message: "Такой страницы не существует",
    });
  }
});

module.exports = router;
