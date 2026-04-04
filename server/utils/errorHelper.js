function explainError(errorMsg) {
  errorMsg = errorMsg.toLowerCase();

  // Python Errors
  if (errorMsg.includes("syntaxerror")) {
    return `❌ Syntax Error

📌 Problem:
ඔයාගේ code syntax වැරදි

💡 Why:
Python syntax rules follow කරලා නෑ

✅ Fix:
- brackets () check කරන්න
- colon : දාන්න (if, for, function වලදී)
`;
  }

  if (errorMsg.includes("nameerror")) {
    return `❌ Name Error

📌 Problem:
variable එක define කරලා නෑ

💡 Why:
Python unknown variable එකක් හම්බ වුණා

✅ Fix:
x = 10 වගේ value assign කරන්න`;
  }

  // Java Errors
  if (errorMsg.includes("cannot find symbol")) {
    return `❌ Java Error

📌 Problem:
variable/method එක හඳුනාගන්න බෑ

✅ Fix:
variable declare කරලා බලන්න`;
  }

  if (errorMsg.includes("incompatible types")) {
    return `❌ Type Error

📌 Problem:
data type mismatch

💡 Example:
int a = "10" ❌

✅ Fix:
int a = 10 ✔`;
  }

  // C++ Errors
  if (errorMsg.includes("was not declared")) {
    return `❌ C++ Error

📌 Problem:
variable එක declare කරලා නෑ

✅ Fix:
int x; වගේ declare කරන්න`;
  }

  return `❌ Unknown Error

👉 code එක carefully check කරන්න`;
}

module.exports = { explainError };