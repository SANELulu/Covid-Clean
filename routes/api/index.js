const router = require("express").Router();
const mapRoutes = require("./map");
const userRoutes = require("./user");

//map routes
router.use("/map", mapRoutes);
router.use("/user", userRoutes);

module.exports = router;
