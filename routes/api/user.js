const router = require("express").Router();
const userController = require("../../controllers/userController");

//location by id
router.route("/:id").get(userController.findById);

module.exports = router;
