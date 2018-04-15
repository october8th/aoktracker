const router = require("express").Router();
const fusionController = require("../../controllers/fusionController");

router.route("/")
    .post(fusionController.create);

module.exports = router;