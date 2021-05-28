const router = require("express").Router();
const mapController = require("../../controllers/mapController");

//all locations with "/api/map"
router.route("/allData").get(mapController.findAll);

//location by id
router.route("/:id").get(mapController.findById);

router.route("/postreview").post(mapController.postReview);
module.exports = router;
