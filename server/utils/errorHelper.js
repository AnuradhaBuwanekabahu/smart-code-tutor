const pythonErrors = require("../errors/pythonErrors");
const jsErrors = require("../errors/javascriptErrors");
const javaErrors = require("../errors/javaErrors");
const cppErrors = require("../errors/cppErrors");

function findError(errorMsg, lang = "en", language = "python") {
  errorMsg = errorMsg.toLowerCase();
  language = language.toLowerCase(); // ✅ FIX HERE

  let db = [];

  if (language === "python") db = pythonErrors;
  else if (language === "javascript") db = jsErrors;
  else if (language === "java") db = javaErrors;
  else if (language === "cpp" || language === "c++") db = cppErrors; // ✅ FIX HERE

  const error = db.find(e =>
  e.patterns?.some(p => errorMsg.includes(p))
);
  if (!error) {
    return {
      message: lang === "si" ? "❌ Unknown error" : "❌ Unknown error",
      fix: lang === "si" ? "Code එක check කරන්න" : "Check your code"
    };
  }

  return {
    message: error.message[lang],
    fix: error.fix[lang]
  };
}

module.exports = { findError };