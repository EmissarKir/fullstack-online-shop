const express = require("express");
const auth = require("../middleware/auth.middleware");
const Template = require("../models/Template");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(auth, async (req, res) => {
    try {
      const templates = await Template.find();
      res.status(200).send(templates);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .post(auth, async (req, res) => {
    try {
      const newTemplate = await Template.create({
        ...req.body,
      });
      res.status(201).send(newTemplate);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

router.delete("/:templateId", auth, async (req, res) => {
  try {
    const { templateId } = req.params;
    const removedTemplate = await Template.findById(templateId);
    await removedTemplate.remove();
    return res.send(null);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.patch("/:templateId", auth, async (req, res) => {
  try {
    const { templateId } = req.params;

    const updatedTemplate = await Template.findByIdAndUpdate(
      templateId,
      req.body,
      { new: true }
    );
    res.send(updatedTemplate);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
