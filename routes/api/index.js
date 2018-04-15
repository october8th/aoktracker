const router = require("express").Router();
const aokRoutes = require("./aoks");
const fusionRoutes = require("./fusion");

router.use("/new", aokRoutes);
router.use("/fusiontable",fusionRoutes);

module.exports = router;