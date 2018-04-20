const router = require("express").Router();
const aokController = require("../../controllers/aokController");

router
    .route("/")
    .get(aokController.findAll)
    .post(aokController.create);

router
    .route("/:id")
    .get(aokController.findById)
    .put(aokController.update)
    .delete(aokController.remove)

module.exports = router;