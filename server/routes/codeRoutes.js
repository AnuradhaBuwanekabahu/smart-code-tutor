const express = require("express");
const router = express.Router();
const fs = require("fs");
const { exec } = require("child_process");
const { findError } = require("../utils/errorHelper");

router.post("/run", async (req, res) => {
  const { code, language, aiLanguage } = req.body;

  let fileName;
  let command;

  // Python
  if (language === "python") {
    fileName = "temp.py";
    command = `python ${fileName}`;
  }

  // JavaScript
  else if (language === "javascript") {
    fileName = "temp.js";
    command = `node ${fileName}`;
  }

  // Java
  else if (language === "java") {
    fileName = "Temp.java";
    command = `javac ${fileName} && java Temp`;
  }

  // C++
  else if (language === "cpp") {
    fileName = "temp.cpp";
    command = `g++ ${fileName} -o temp.exe && temp.exe`;
  }

  else {
    return res.json({
      output: "Invalid language",
      explanation: "",
      fix: "",
      error: true
    });
  }

  // write file AFTER deciding language
  fs.writeFileSync(fileName, code);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      const fullError = stderr || error.message;

      const result = findError(fullError, aiLanguage, language);

      return res.json({
        output: fullError,
        explanation: result.message,
        fix: result.fix,
        error: true
      });
    }

    res.json({
      output: stdout || "✅ Program ran successfully",
      explanation: "✅ No errors",
      fix: "",
      error: false
    });
  });
});

module.exports = router;