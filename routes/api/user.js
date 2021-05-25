const router = require("express").Router();
const userController = require("../../controllers/userController");

// router.route("/:id").get(userController.findById);

router.route("/").post(userController.create);

module.exports = router;
