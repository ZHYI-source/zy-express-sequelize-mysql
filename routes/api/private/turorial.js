const express = require('express');
const router = express.Router();
const path = require("path");
const logger = require("../../../utils/utils.logger").logger();
const tutorials = require("../../../controllers/tutorial.controller.js");
// Create a new Tutorial
router.post("/", tutorials.create);

// Retrieve all Tutorials
router.get("/list", tutorials.findAll);

router.post("/list", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all Tutorials
router.delete("/", tutorials.deleteAll);

module.exports = router;
