const router = require("express").Router();
const aokRoutes = require("./aoks");

router.use("/aoks", aokRoutes);

module.exports = router;