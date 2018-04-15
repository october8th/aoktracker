const router = require("express").Router();
const aokRoutes = require("./aoks");

router.use("/new", aokRoutes);

module.exports = router;