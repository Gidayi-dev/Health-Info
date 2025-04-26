const express = require("express");
const router = express.Router();
const programsController = require("../controllers/programsController"); // Fix this line

router.post("/", programsController.createProgram); // Fix this line
router.get("/", programsController.getPrograms); // Fix this line

module.exports = router;
