const express = require("express");
const Product = require("../models/Product");
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
