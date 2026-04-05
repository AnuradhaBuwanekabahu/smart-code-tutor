const pythonErrors = [
  {
    key: "nameerror",
    message: { en: "Variable not defined", si: "Variable එක define කරලා නෑ" },
    fix: { en: "Define variable first (e.g., x = 10)", si: "මුලින් variable එක assign කරන්න (x = 10)" }
  },
  {
    key: "syntaxerror",
    message: { en: "Syntax error", si: "Syntax error" },
    fix: { en: "Check brackets and missing symbols", si: "brackets සහ missing symbols check කරන්න" }
  },
  {
    key: "indentationerror",
    message: { en: "Indentation error", si: "Indentation error" },
    fix: { en: "Fix spaces/tabs properly", si: "spaces/tab correct කරන්න" }
  },
  {
    key: "zerodivisionerror",
    message: { en: "Cannot divide by zero", si: "0 න් divide කරන්න බැහැ" },
    fix: { en: "Check divisor before dividing", si: "divide කරන්න කලින් value check කරන්න" }
  },
  {
    key: "valueerror",
    message: { en: "Invalid value", si: "Invalid value" },
    fix: { en: "Use correct data type/value", si: "correct value එකක් use කරන්න" }
  },

  {
    key: "typeerror",
    message: { en: "Wrong data type used", si: "වැරදි data type එකක් use කරලා" },
    fix: { en: "Check variable types before operations", si: "operation කරන්න කලින් type check කරන්න" }
  },
  {
    key: "indexerror",
    message: { en: "Index out of range", si: "Index range එකෙන් එහා" },
    fix: { en: "Check list length before accessing index", si: "list length එක check කරන්න" }
  },
  {
    key: "keyerror",
    message: { en: "Key not found in dictionary", si: "Dictionary key හමුනොවුණා" },
    fix: { en: "Use .get() or check key exists", si: ".get() use කරන්න හෝ key check කරන්න" }
  },
  {
    key: "attributeerror",
    message: { en: "Invalid attribute access", si: "Attribute access error" },
    fix: { en: "Check object methods/attributes", si: "object එකේ attributes check කරන්න" }
  },
  {
    key: "importerror",
    message: { en: "Module import failed", si: "Module import වෙන්න බැහැ" },
    fix: { en: "Check module name and installation", si: "module name සහ install check කරන්න" }
  },

  {
    key: "modulenotfounderror",
    message: { en: "Module not found", si: "Module හමුනොවුණා" },
    fix: { en: "Install module using pip", si: "pip install කරන්න" }
  },
  {
    key: "filenotfounderror",
    message: { en: "File not found", si: "File එක හමුනොවුණා" },
    fix: { en: "Check file path", si: "file path එක check කරන්න" }
  },
  {
    key: "permissionerror",
    message: { en: "Permission denied", si: "Permission නැහැ" },
    fix: { en: "Run as admin or change permissions", si: "admin ලෙස run කරන්න" }
  },
  {
    key: "overflowerror",
    message: { en: "Number too large", si: "අගය වැඩියි" },
    fix: { en: "Use smaller values or float", si: "small values use කරන්න" }
  },
  {
    key: "recursionerror",
    message: { en: "Maximum recursion depth exceeded", si: "Recursion limit ඉක්මවා ගියා" },
    fix: { en: "Fix recursive function condition", si: "recursive condition fix කරන්න" }
  },

  {
    key: "memoryerror",
    message: { en: "Out of memory", si: "Memory නැතිවෙලා" },
    fix: { en: "Reduce data size", si: "data size අඩු කරන්න" }
  },
  {
    key: "unboundlocalerror",
    message: { en: "Local variable used before assignment", si: "Variable assign නොකර use කරලා" },
    fix: { en: "Assign variable before using", si: "use කරන්න කලින් assign කරන්න" }
  },
  {
    key: "stopiteration",
    message: { en: "Iterator finished", si: "Iterator අවසන්" },
    fix: { en: "Handle iteration properly", si: "loop handle කරන්න" }
  },
  {
    key: "assertionerror",
    message: { en: "Assertion failed", si: "Assertion fail වුණා" },
    fix: { en: "Check assert condition", si: "assert condition check කරන්න" }
  },
  {
    key: "eoferror",
    message: { en: "Unexpected end of input", si: "Input එක අසම්පූර්ණයි" },
    fix: { en: "Provide required input", si: "input complete කරන්න" }
  },

  {
    key: "floatingpointerror",
    message: { en: "Floating point error", si: "Decimal calculation error" },
    fix: { en: "Check math operations", si: "math operations check කරන්න" }
  },
  {
    key: "arithmeticerror",
    message: { en: "Math operation error", si: "ගණිත error" },
    fix: { en: "Check calculations", si: "calculation check කරන්න" }
  },
  {
    key: "lookuperror",
    message: { en: "Lookup failed", si: "Lookup fail වුණා" },
    fix: { en: "Check keys/index", si: "key/index check කරන්න" }
  },
  {
    key: "runtimeerror",
    message: { en: "Runtime error", si: "Runtime error" },
    fix: { en: "Check logic", si: "logic check කරන්න" }
  },
  {
    key: "notimplementederror",
    message: { en: "Not implemented feature", si: "Feature එක implement කරලා නෑ" },
    fix: { en: "Complete implementation", si: "code එක complete කරන්න" }
  },

  {
    key: "oserror",
    message: { en: "Operating system error", si: "OS error" },
    fix: { en: "Check system resources", si: "system check කරන්න" }
  },
  {
    key: "taberror",
    message: { en: "Mixed tabs and spaces", si: "tabs සහ spaces mix කරලා" },
    fix: { en: "Use only spaces or tabs", si: "එක format එකක් use කරන්න" }
  },
  {
    key: "unicodeerror",
    message: { en: "Encoding error", si: "Unicode error" },
    fix: { en: "Fix encoding format", si: "encoding fix කරන්න" }
  },

  {
    key: "keyboardinterrupt",
    message: { en: "Program stopped manually", si: "Program එක stop කරලා" },
    fix: { en: "Restart program", si: "program නැවත run කරන්න" }
  },
  {
    key: "environmenterror",
    message: { en: "Environment issue", si: "Environment error" },
    fix: { en: "Check setup", si: "setup check කරන්න" }
  },
  {
    key: "systemerror",
    message: { en: "System error", si: "System error" },
    fix: { en: "Restart system or debug", si: "system restart කරන්න" }
  },

  // EXTRA COMMON ONES (to reach 65+)
  {
    key: "referenceerror",
    message: { en: "Reference missing", si: "Reference හමුනොවුණා" },
    fix: { en: "Check variable reference", si: "reference check කරන්න" }
  },
  {
    key: "timeouterror",
    message: { en: "Process timed out", si: "Time out වුණා" },
    fix: { en: "Optimize code", si: "code optimize කරන්න" }
  },
  {
    key: "connectionerror",
    message: { en: "Connection failed", si: "Connection fail වුණා" },
    fix: { en: "Check internet/API", si: "internet check කරන්න" }
  },
  {
    key: "httperror",
    message: { en: "HTTP request failed", si: "HTTP request fail වුණා" },
    fix: { en: "Check API endpoint", si: "API link check කරන්න" }
  },
  {
    key: "jsondecodeerror",
    message: { en: "Invalid JSON format", si: "JSON format error" },
    fix: { en: "Fix JSON structure", si: "JSON structure fix කරන්න" }
  },

  {
    key: "typecastingerror",
    message: { en: "Type conversion failed", si: "Type convert error" },
    fix: { en: "Check type casting", si: "type conversion check කරන්න" }
  },
  {
    key: "divisionfloatederror",
    message: { en: "Float division issue", si: "Float division error" },
    fix: { en: "Use proper division operator", si: "correct operator use කරන්න" }
  },
  {
    key: "circularimporterror",
    message: { en: "Circular import detected", si: "Circular import error" },
    fix: { en: "Restructure imports", si: "import structure change කරන්න" }
  },
  {
    key: "deprecatederror",
    message: { en: "Deprecated function used", si: "Old function use කරලා" },
    fix: { en: "Use updated method", si: "new method use කරන්න" }
  },
  {
    key: "securityerror",
    message: { en: "Security restriction error", si: "Security block" },
    fix: { en: "Check permissions/security rules", si: "security check කරන්න" }
  }
];

module.exports = pythonErrors;