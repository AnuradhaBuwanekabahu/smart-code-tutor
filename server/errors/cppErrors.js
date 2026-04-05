const cppErrors = [
  {
  key: "missing_semicolon",
  patterns: ["expected ';' before", "missing ';'"],
  message: {
    en: "Missing semicolon",
    si: "semicolon එක අතුරුදහන්"
  },
  fix: {
    en: "Add semicolon at end of statement",
    si: "line එක අවසානයට ; දාන්න"
  }
  },
  {
    key: "segmentationfault",
    message: { en: "Invalid memory access", si: "Memory access error" },
    fix: { en: "Check pointers and array bounds", si: "pointer සහ array bounds check කරන්න" }
  },
  {
    key: "syntaxerror",
    message: { en: "Syntax error in code", si: "Syntax error" },
    fix: { en: "Check semicolons, braces, and syntax", si: "semicolon සහ braces check කරන්න" }
  },
  {
    key: "nullpointerdereference",
    message: { en: "Null pointer used", si: "Null pointer error" },
    fix: { en: "Initialize pointer before use", si: "pointer initialize කරන්න" }
  },
  {
    key: "outofbounds",
    message: { en: "Array index out of bounds", si: "Array limit error" },
    fix: { en: "Check array size before access", si: "array size check කරන්න" }
  },
  {
    key: "memoryleak",
    message: { en: "Memory not freed", si: "Memory leak" },
    fix: { en: "Use delete/free properly", si: "memory free කරන්න" }
  },

  {
    key: "compilationerror",
    message: { en: "Compilation failed", si: "Compile error" },
    fix: { en: "Fix syntax and includes", si: "code syntax fix කරන්න" }
  },
  {
    key: "linkererror",
    message: { en: "Linking failed", si: "Linker error" },
    fix: { en: "Check library linking", si: "libraries check කරන්න" }
  },
  {
    key: "undefinedreference",
    message: { en: "Undefined reference", si: "Function not found" },
    fix: { en: "Define function properly", si: "function define කරන්න" }
  },
  {
    key: "multipledefinition",
    message: { en: "Multiple definition error", si: "Duplicate definition" },
    fix: { en: "Remove duplicate functions", si: "duplicate remove කරන්න" }
  },
  {
    key: "typemismatch",
    message: { en: "Type mismatch", si: "Type error" },
    fix: { en: "Use correct data types", si: "data type correct කරන්න" }
  },

  {
    key: "divisionbyzero",
    message: { en: "Division by zero", si: "0 න් divide කරන්න බැහැ" },
    fix: { en: "Check denominator", si: "0 check කරන්න" }
  },
  {
    key: "overflowerror",
    message: { en: "Integer overflow", si: "Overflow error" },
    fix: { en: "Use larger data type", si: "long long use කරන්න" }
  },
  {
    key: "underflowerror",
    message: { en: "Integer underflow", si: "Underflow error" },
    fix: { en: "Check value limits", si: "value limit check කරන්න" }
  },
  {
    key: "invalidcast",
    message: { en: "Invalid type cast", si: "Cast error" },
    fix: { en: "Use safe casting (static_cast)", si: "correct casting use කරන්න" }
  },
  {
    key: "runtimeerror",
    message: { en: "Runtime error", si: "Runtime error" },
    fix: { en: "Check logic flow", si: "logic check කරන්න" }
  },

  {
    key: "stackoverflow",
    message: { en: "Stack overflow", si: "Recursion overflow" },
    fix: { en: "Fix recursive calls", si: "recursion fix කරන්න" }
  },
  {
    key: "heapoverflow",
    message: { en: "Heap overflow", si: "Heap memory error" },
    fix: { en: "Optimize dynamic memory", si: "memory optimize කරන්න" }
  },
  {
    key: "fileerror",
    message: { en: "File operation error", si: "File error" },
    fix: { en: "Check file path and open mode", si: "file path check කරන්න" }
  },
  {
    key: "filenotfound",
    message: { en: "File not found", si: "File missing" },
    fix: { en: "Verify file location", si: "file location check කරන්න" }
  },
  {
    key: "permissiondenied",
    message: { en: "Permission denied", si: "Permission error" },
    fix: { en: "Run with admin rights", si: "admin access check කරන්න" }
  },

  {
    key: "constructorerror",
    message: { en: "Constructor error", si: "Constructor issue" },
    fix: { en: "Check class constructor", si: "constructor fix කරන්න" }
  },
  {
    key: "destructorerror",
    message: { en: "Destructor error", si: "Destructor issue" },
    fix: { en: "Define destructor properly", si: "destructor check කරන්න" }
  },
  {
    key: "objecterror",
    message: { en: "Object creation error", si: "Object error" },
    fix: { en: "Check class instantiation", si: "object create කරන්න" }
  },
  {
    key: "inheritanceerror",
    message: { en: "Inheritance issue", si: "Inheritance error" },
    fix: { en: "Check parent-child class", si: "inheritance fix කරන්න" }
  },
  {
    key: "polymorphismerror",
    message: { en: "Polymorphism error", si: "Polymorphism issue" },
    fix: { en: "Use virtual functions", si: "virtual functions use කරන්න" }
  },

  {
    key: "templateerror",
    message: { en: "Template error", si: "Template issue" },
    fix: { en: "Fix template syntax", si: "template correct කරන්න" }
  },
  {
    key: "stlerror",
    message: { en: "STL usage error", si: "STL error" },
    fix: { en: "Check STL container usage", si: "STL usage fix කරන්න" }
  },
  {
    key: "iteratorerror",
    message: { en: "Iterator invalid", si: "Iterator error" },
    fix: { en: "Check container modification", si: "iterator safe use කරන්න" }
  },
  {
    key: "algorithmerror",
    message: { en: "Algorithm misuse", si: "Algorithm error" },
    fix: { en: "Check STL algorithm usage", si: "algorithm correct use කරන්න" }
  },
  {
    key: "logicerror",
    message: { en: "Logical error", si: "Logic error" },
    fix: { en: "Debug program flow", si: "logic debug කරන්න" }
  },

  {
    key: "includeerror",
    message: { en: "Missing include", si: "Header missing" },
    fix: { en: "Add required headers", si: "header file add කරන්න" }
  },
  {
    key: "namespacerror",
    message: { en: "Namespace issue", si: "Namespace error" },
    fix: { en: "Use std:: or correct namespace", si: "namespace fix කරන්න" }
  },
  {
    key: "undefinedsymbol",
    message: { en: "Undefined symbol", si: "Symbol not found" },
    fix: { en: "Link correct library", si: "library link කරන්න" }
  },
  {
    key: "compilererror",
    message: { en: "Compiler error", si: "Compiler error" },
    fix: { en: "Fix syntax errors", si: "compiler error fix කරන්න" }
  },
  {
    key: "debugerror",
    message: { en: "Debugging issue", si: "Debug error" },
    fix: { en: "Use debugger tools", si: "debug tool use කරන්න" }
  },

  // EXTRA TO REACH 65+
  {
    key: "typeconversionerror",
    message: { en: "Type conversion error", si: "Type cast issue" },
    fix: { en: "Use explicit casting", si: "casting fix කරන්න" }
  },
  {
    key: "consterror",
    message: { en: "Const violation", si: "Const error" },
    fix: { en: "Do not modify const variables", si: "const change කරන්න එපා" }
  },
  {
    key: "pointererror",
    message: { en: "Pointer misuse", si: "Pointer error" },
    fix: { en: "Check pointer usage", si: "pointer safe use කරන්න" }
  },
  {
    key: "referenceerror",
    message: { en: "Reference error", si: "Reference issue" },
    fix: { en: "Check reference binding", si: "reference fix කරන්න" }
  },
  {
    key: "threaderror",
    message: { en: "Thread issue", si: "Thread error" },
    fix: { en: "Synchronize threads", si: "thread sync කරන්න" }
  },

  {
    key: "deadlockerror",
    message: { en: "Deadlock detected", si: "Deadlock error" },
    fix: { en: "Avoid circular locking", si: "deadlock avoid කරන්න" }
  },
  {
    key: "resourceerror",
    message: { en: "Resource not released", si: "Resource leak" },
    fix: { en: "Free resources properly", si: "resource release කරන්න" }
  }
];

module.exports = cppErrors;