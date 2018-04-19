const router = require("express").Router();
const aokRoutes = require("./aoks");
const fusionRoutes = require("./fusion");
const daokRoutes = require("./daoks");

router.use("/new", aokRoutes);
router.use("/fusiontable",fusionRoutes);
router.use("/daok",daokRoutes);

module.exports = router;