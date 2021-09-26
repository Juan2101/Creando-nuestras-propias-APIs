const express = require("express");
const router = express.Router();
const { create, destroy } = require("../../controllers/api/moviesController");

router.post("/", create);
router.delete("/delete/:id", destroy)

module.exports = router