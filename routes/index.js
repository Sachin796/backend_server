const router = require("express").Router();
const studentapiRoutes = require("./api/students");
const clientapiRoutes = require("./api/clients");

router.use("/api/students", studentapiRoutes);
router.use("/api/clients", clientapiRoutes);

module.exports = router;
