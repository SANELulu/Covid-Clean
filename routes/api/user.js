const router = require("express").Router();
const userController = require("../../controllers/userController");

// router.route("/:id").get(userController.findById);

router.route("/signup").post(userController.create);
router.route("/signin").post(userController.findById);

module.exports = router;
