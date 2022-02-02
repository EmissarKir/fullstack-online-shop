const express = require("express");
const Template = require("../models/Template");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const templates = await Template.find();
    res.status(200).send(templates);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
