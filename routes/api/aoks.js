const router = require("express").Router();
const aokController = require("../../controllers/aokController");

router.route("/new/")
    .get(aokController.findAll)
    .post(aokController.create);

module.exports = router;