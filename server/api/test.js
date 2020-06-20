const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/test", (req, res) => {
  fs.writeFile("token.json", "Hello", err => {
    if (err) return res.status(500).send("NOT OK");
    return res.status(200).json(content);
  });
});
router.get("/test2", (req, res) => {
  fs.readFile(__dirname + "/credentials.json", async (err, content) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(content);
  });
});

module.exports = router;
