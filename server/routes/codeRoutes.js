const express = require("express");
const router = express.Router();
const fs = require("fs");
const { exec } = require("child_process");
const explainError = require("../utils/gemini");

router.post("/run", async (req, res) => {
  const { code, language, aiLanguage } = req.body;

  let fileName = "temp.py";
  let command = "python temp.py";

  // only python for now (clean version)
  fs.writeFileSync(fileName, code);

  exec(command, async (error, stdout, stderr) => {
    if (error) {
      const explanation = await explainError(stderr, aiLanguage);

      return res.json({
        output: stderr,
        explanation,
        error: true
      });
    }

    res.json({
      output: stdout,
      explanation: "✅ No errors",
      error: false
    });
  });
});

module.exports = router;