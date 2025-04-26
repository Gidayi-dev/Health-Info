const express = require("express");
const router = express.Router();
const enrollmentsController = require("../controllers/enrollmentsController");

router.post("/", enrollmentsController.enrollClient);

module.exports = router;
