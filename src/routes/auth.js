const googleControllers = require("../config/auth");
const express = require("express");
const router = express.Router();

router.post("/google", googleControllers.googleAuth);

module.exports = router;