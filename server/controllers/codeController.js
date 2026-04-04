const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const { explainError } = require("../utils/errorHelper");

exports.runCode = (req, res) => {
  const { code, language } = req.body;

  let fileName;
  let command;

  // Python
  if (language === "python") {
    fileName = "temp.py";
    fs.writeFileSync(fileName, code);
    command = `python ${fileName}`;
  }

  // Java (basic)
  else if (language === "java") {
    fileName = "Temp.java";
    fs.writeFileSync(fileName, code);
    command = `javac ${fileName} && java Temp`;
  }

  // C++
  else if (language === "cpp") {
    fileName = "temp.cpp";
    fs.writeFileSync(fileName, code);
    command = `g++ ${fileName} -o temp && temp`;
  }

  exec(command, (error, stdout, stderr) => {
  if (error) {
    const explanation = explainError(stderr);

    return res.json({
      output: stderr,
      explanation: explanation,
      error: true
    });
  }

  res.json({
    output: stdout,
    explanation: "✅ No errors",
    error: false
  });
});
};