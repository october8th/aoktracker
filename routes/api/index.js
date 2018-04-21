const router = require("express").Router();
const aokRoutes = require("./aoks");
const fusionRoutes = require("./fusion");
const daokRoutes = require("./daoks");
const noteRoutes = require("./notes")

router.use("/new", aokRoutes);
router.use("/fusiontable",fusionRoutes);
router.use("/daok",daokRoutes);
router.use("/notes",noteRoutes);

module.exports = router;