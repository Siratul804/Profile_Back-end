const express = require("express");
const router = express.Router();
const { User } = require("../Controller/User");

router.post("/user", User);

module.exports = router;
