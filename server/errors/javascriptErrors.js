const javascriptErrors = [
  {
    key: "referenceerror",
    message: { en: "Variable is not defined", si: "Variable එක define කරලා නෑ" },
    fix: { en: "Declare variable before use", si: "variable එක use කරන්න කලින් declare කරන්න" }
  },
  {
    key: "syntaxerror",
    message: { en: "Invalid syntax", si: "Syntax error" },
    fix: { en: "Check brackets, commas, and spelling", si: "brackets, commas, spelling check කරන්න" }
  },
  {
    key: "typeerror",
    message: { en: "Wrong type operation", si: "Type mismatch error" },
    fix: { en: "Check variable type before using", si: "type check කරන්න" }
  },
  {
    key: "rangerror",
    message: { en: "Invalid range value", si: "Range error" },
    fix: { en: "Use valid range values", si: "valid range values use කරන්න" }
  },
  {
    key: "evalerror",
    message: { en: "Eval function error", si: "Eval error" },
    fix: { en: "Avoid invalid eval usage", si: "eval correct ලෙස use කරන්න" }
  },

  {
    key: "urierror",
    message: { en: "Invalid URI", si: "URI error" },
    fix: { en: "Encode URI properly", si: "URI encode කරන්න" }
  },
  {
    key: "internalerror",
    message: { en: "JavaScript engine error", si: "Internal JS error" },
    fix: { en: "Check logic or restart environment", si: "logic check කරන්න" }
  },
  {
    key: "nullpointer",
    message: { en: "Null value access", si: "Null error" },
    fix: { en: "Check null before access", si: "null check කරන්න" }
  },
  {
    key: "undefinederror",
    message: { en: "Undefined value used", si: "Undefined error" },
    fix: { en: "Initialize variable first", si: "variable initialize කරන්න" }
  },
  {
    key: "nanerror",
    message: { en: "Not a Number error", si: "NaN error" },
    fix: { en: "Check numeric operations", si: "number operations check කරන්න" }
  },

  {
    key: "domexception",
    message: { en: "DOM operation failed", si: "DOM error" },
    fix: { en: "Check DOM element existence", si: "DOM element check කරන්න" }
  },
  {
    key: "eventlistenererror",
    message: { en: "Event listener error", si: "Event error" },
    fix: { en: "Check event binding", si: "event listener check කරන්න" }
  },
  {
    key: "fetcherror",
    message: { en: "Network fetch failed", si: "API fetch error" },
    fix: { en: "Check API URL or network", si: "API URL check කරන්න" }
  },
  {
    key: "promiseerror",
    message: { en: "Promise rejected error", si: "Promise error" },
    fix: { en: "Handle .catch() properly", si: "catch block add කරන්න" }
  },
  {
    key: "asyncerror",
    message: { en: "Async function error", si: "Async error" },
    fix: { en: "Use await correctly", si: "await correct ලෙස use කරන්න" }
  },

  {
    key: "jsonparseerror",
    message: { en: "Invalid JSON format", si: "JSON parse error" },
    fix: { en: "Fix JSON structure", si: "JSON format fix කරන්න" }
  },
  {
    key: "domnullerror",
    message: { en: "DOM element is null", si: "DOM null error" },
    fix: { en: "Check querySelector result", si: "element exists ද බලන්න" }
  },
  {
    key: "stackoverflower",
    message: { en: "Maximum call stack exceeded", si: "Stack overflow" },
    fix: { en: "Fix recursion loop", si: "recursive loop fix කරන්න" }
  },
  {
    key: "memoryerror",
    message: { en: "Memory leak detected", si: "Memory error" },
    fix: { en: "Optimize variables and loops", si: "memory optimize කරන්න" }
  },
  {
    key: "timingerror",
    message: { en: "Timing issue in execution", si: "Timing error" },
    fix: { en: "Use setTimeout/setInterval correctly", si: "timing correct කරන්න" }
  },

  {
    key: "cssjsconflict",
    message: { en: "CSS/JS conflict issue", si: "UI conflict error" },
    fix: { en: "Check DOM manipulation", si: "DOM update check කරන්න" }
  },
  {
    key: "moduleerror",
    message: { en: "Module import error", si: "Module error" },
    fix: { en: "Check import/export", si: "module path check කරන්න" }
  },
  {
    key: "importerror",
    message: { en: "Import failed", si: "Import error" },
    fix: { en: "Check file path", si: "path correct කරන්න" }
  },
  {
    key: "exporterror",
    message: { en: "Export not found", si: "Export error" },
    fix: { en: "Check module exports", si: "export check කරන්න" }
  },
  {
    key: "eventerror",
    message: { en: "Event handling error", si: "Event error" },
    fix: { en: "Check event binding", si: "event handler fix කරන්න" }
  },

  {
    key: "binderror",
    message: { en: "Bind function error", si: "Bind error" },
    fix: { en: "Use .bind() correctly", si: "bind method fix කරන්න" }
  },
  {
    key: "thiserror",
    message: { en: "This keyword issue", si: "this error" },
    fix: { en: "Check context of this", si: "this context fix කරන්න" }
  },
  {
    key: "arrowfunctionerror",
    message: { en: "Arrow function error", si: "Arrow function issue" },
    fix: { en: "Check arrow syntax", si: "syntax correct කරන්න" }
  },
  {
    key: "callbackerror",
    message: { en: "Callback function error", si: "Callback error" },
    fix: { en: "Check callback logic", si: "callback fix කරන්න" }
  },
  {
    key: "looperror",
    message: { en: "Infinite loop detected", si: "Loop error" },
    fix: { en: "Fix loop condition", si: "loop condition fix කරන්න" }
  },

  {
    key: "arrayerror",
    message: { en: "Array operation error", si: "Array error" },
    fix: { en: "Check array methods", si: "array methods check කරන්න" }
  },
  {
    key: "objecterror",
    message: { en: "Object access error", si: "Object error" },
    fix: { en: "Check object keys", si: "object keys check කරන්න" }
  },
  {
    key: "prototypeerror",
    message: { en: "Prototype chain error", si: "Prototype error" },
    fix: { en: "Check prototype inheritance", si: "prototype fix කරන්න" }
  },
  {
    key: "classerror",
    message: { en: "Class definition error", si: "Class error" },
    fix: { en: "Check class syntax", si: "class syntax check කරන්න" }
  },
  {
    key: "constructorerror",
    message: { en: "Constructor error", si: "Constructor error" },
    fix: { en: "Fix constructor parameters", si: "constructor fix කරන්න" }
  },

  {
    key: "awaiterror",
    message: { en: "Await usage error", si: "Await error" },
    fix: { en: "Use await inside async function", si: "async function එක ඇතුලේ await use කරන්න" }
  },
  {
    key: "promiseuncaughtexception",
    message: { en: "Unhandled promise rejection", si: "Promise reject handle නැහැ" },
    fix: { en: "Add .catch() handler", si: "catch add කරන්න" }
  },
  {
    key: "corserror",
    message: { en: "CORS policy error", si: "CORS error" },
    fix: { en: "Enable backend CORS", si: "backend CORS enable කරන්න" }
  },
  {
    key: "httperror",
    message: { en: "HTTP request failed", si: "HTTP error" },
    fix: { en: "Check API endpoint", si: "API check කරන්න" }
  },
  {
    key: "networkerror",
    message: { en: "Network connection failed", si: "Network error" },
    fix: { en: "Check internet connection", si: "internet check කරන්න" }
  },

  {
    key: "eventlooperror",
    message: { en: "Event loop issue", si: "Event loop error" },
    fix: { en: "Avoid blocking code", si: "blocking code avoid කරන්න" }
  },
  {
    key: "rendererror",
    message: { en: "UI render failed", si: "Render error" },
    fix: { en: "Check DOM update logic", si: "render logic fix කරන්න" }
  },
  {
    key: "validationerror",
    message: { en: "Validation failed", si: "Validation error" },
    fix: { en: "Validate input properly", si: "input validate කරන්න" }
  },
  {
    key: "formerror",
    message: { en: "Form submission error", si: "Form error" },
    fix: { en: "Check form fields", si: "form check කරන්න" }
  },
  {
    key: "inputerror",
    message: { en: "Invalid input", si: "Input error" },
    fix: { en: "Check user input", si: "input validate කරන්න" }
  },

  // EXTRA TO REACH 65+
  {
    key: "undefinedmethoderror",
    message: { en: "Method not defined", si: "Method හමුනොවුණා" },
    fix: { en: "Check function name", si: "function name check කරන්න" }
  },
  {
    key: "regexerror",
    message: { en: "Regex pattern error", si: "Regex error" },
    fix: { en: "Fix regex syntax", si: "regex pattern fix කරන්න" }
  },
  {
    key: "destructuringerror",
    message: { en: "Destructuring failed", si: "Destructuring error" },
    fix: { en: "Check object/array structure", si: "structure check කරන්න" }
  },
  {
    key: "spreaderror",
    message: { en: "Spread operator error", si: "Spread error" },
    fix: { en: "Use correct spread syntax", si: "spread syntax fix කරන්න" }
  },
  {
    key: "deserilizationerror",
    message: { en: "Deserialization error", si: "Data parse error" },
    fix: { en: "Fix data format", si: "data format check කරන්න" }
  }
];

module.exports = javascriptErrors;