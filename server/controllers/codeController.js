const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { explainError } = require("../utils/errorHelper");

router.post("/run", async (req, res) => {
  const { code, language, aiLanguage } = req.body;

  console.log("LANGUAGE:", language); // debug

  let fileName;
  let command;

  if (language === "python") {
    fileName = "temp.py";
    command = `python ${fileName}`;
  } 
  else if (language === "javascript") {
    fileName = "temp.js";
    command = `node ${fileName}`;
  } 
  else if (language === "java") {
    fileName = "Temp.java";
    command = `javac ${fileName} && java Temp`;
  } 
  else if (language === "cpp") {
    fileName = "temp.cpp";
    command = `g++ ${fileName} -o temp.exe && temp.exe`;
  } 
  else {
    return res.json({
      output: "Invalid language selected",
      explanation: "",
      fix: "",
      error: true
    });
  }

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