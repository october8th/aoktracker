const router = require("express").Router();
const daokController = require("../../controllers/daokController");

router.route("/")
	.get(daokController.find)
	.patch(daokController.check)
    .post(daokController.update);

module.exports = router;