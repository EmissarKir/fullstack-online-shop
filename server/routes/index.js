const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/product", require("./product.routes"));
router.use("/template", require("./template.routes"));
router.use("/review", require("./review.routes"));

module.exports = router;
