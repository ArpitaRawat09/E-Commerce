const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("heyyy It's working");
});

module.exports = router;