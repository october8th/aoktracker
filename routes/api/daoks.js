const router = require("express").Router();
const daokController = require("../../controllers/daokController");

router.route("/")
	.get(daokController.find)
    .post(daokController.update);

module.exports = router;