const router = require("express").Router();
const aokController = require("../../controllers/noteController");

router
    .route("/:id")
    .get(noteController.findOne)
    .post(noteController.create)
    .delete(noteController.remove);

module.exports = router;