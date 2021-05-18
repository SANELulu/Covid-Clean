const router = require("express").Router();
const mapRoutes = require("./map");

//map routes 
router.use("/map", mapRoutes);

module.exports = router;