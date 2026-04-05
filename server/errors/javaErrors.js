const javaErrors = [
  {
    key: "nullpointerexception",
    message: { en: "Null object reference", si: "Null object reference" },
    fix: { en: "Initialize object before use", si: "object එක use කරන්න කලින් initialize කරන්න" }
  },
  {
    key: "arrayindexoutofboundsexception",
    message: { en: "Array index out of range", si: "Array index limit එකෙන් එහා" },
    fix: { en: "Check array length before access", si: "array length check කරන්න" }
  },
  {
    key: "classnotfoundexception",
    message: { en: "Class not found", si: "Class හමුනොවුණා" },
    fix: { en: "Check class name and imports", si: "class name සහ import check කරන්න" }
  },
  {
    key: "numberformatexception",
    message: { en: "Invalid number format", si: "Number format error" },
    fix: { en: "Ensure valid numeric input", si: "valid number input දෙන්න" }
  },
  {
    key: "ioexception",
    message: { en: "Input/Output error", si: "File/IO error" },
    fix: { en: "Check file path or stream", si: "file path check කරන්න" }
  },

  {
    key: "arithmeticexception",
    message: { en: "Math error (divide by zero)", si: "ගණිත error" },
    fix: { en: "Check division values", si: "divide කරන value check කරන්න" }
  },
  {
    key: "illegalargumentexception",
    message: { en: "Invalid argument passed", si: "වැරදි argument එකක්" },
    fix: { en: "Pass correct parameters", si: "correct parameters දෙන්න" }
  },
  {
    key: "illegalstateexception",
    message: { en: "Illegal state error", si: "Illegal state error" },
    fix: { en: "Check object state before use", si: "object state check කරන්න" }
  },
  {
    key: "stringindexoutofboundsexception",
    message: { en: "String index error", si: "String index out of range" },
    fix: { en: "Check string length", si: "string length check කරන්න" }
  },
  {
    key: "filenotfoundexception",
    message: { en: "File not found", si: "File එක හමුනොවුණා" },
    fix: { en: "Verify file path", si: "file path verify කරන්න" }
  },

  {
    key: "classcastexception",
    message: { en: "Invalid type casting", si: "Type cast error" },
    fix: { en: "Check object type before casting", si: "casting කරන්න කලින් type check කරන්න" }
  },
  {
    key: "sqlsyntaxerrorexception",
    message: { en: "SQL syntax error", si: "SQL syntax error" },
    fix: { en: "Check SQL query syntax", si: "SQL query check කරන්න" }
  },
  {
    key: "sqlexception",
    message: { en: "Database error", si: "Database error" },
    fix: { en: "Check DB connection/query", si: "DB connection check කරන්න" }
  },
  {
    key: "nolocationfoundexception",
    message: { en: "No location found", si: "Location හමුනොවුණා" },
    fix: { en: "Check input parameters", si: "input check කරන්න" }
  },
  {
    key: "securityexception",
    message: { en: "Security violation", si: "Security error" },
    fix: { en: "Check permissions", si: "permissions check කරන්න" }
  },

  {
    key: "unsupportedoperationexception",
    message: { en: "Operation not supported", si: "Operation support නැහැ" },
    fix: { en: "Use supported method", si: "supported method use කරන්න" }
  },
  {
    key: "concurrentmodificationexception",
    message: { en: "Collection modified during iteration", si: "Loop අතර data change වෙලා" },
    fix: { en: "Use Iterator safely", si: "Iterator properly use කරන්න" }
  },
  {
    key: "stackoverflowererror",
    message: { en: "Stack overflow", si: "Recursion overflow" },
    fix: { en: "Fix recursion loop", si: "recursive call fix කරන්න" }
  },
  {
    key: "outofmemoryerror",
    message: { en: "Out of memory", si: "Memory full" },
    fix: { en: "Optimize memory usage", si: "memory optimize කරන්න" }
  },
  {
    key: "nosuchelementexception",
    message: { en: "No element found", si: "Element හමුනොවුණා" },
    fix: { en: "Check collection before access", si: "collection check කරන්න" }
  },

  {
    key: "inputmismatchexception",
    message: { en: "Input type mismatch", si: "Input mismatch" },
    fix: { en: "Provide correct input type", si: "correct input type දෙන්න" }
  },
  {
    key: "beancreationexception",
    message: { en: "Bean creation failed", si: "Bean error" },
    fix: { en: "Check Spring config", si: "Spring config check කරන්න" }
  },
  {
    key: "illegalaccessexception",
    message: { en: "Illegal access", si: "Access denied" },
    fix: { en: "Fix access modifiers", si: "access modifier check කරන්න" }
  },
  {
    key: "invocationtargetexception",
    message: { en: "Method invocation failed", si: "Method call error" },
    fix: { en: "Check reflection method", si: "method call check කරන්න" }
  },
  {
    key: "instantiationexception",
    message: { en: "Object creation failed", si: "Object create error" },
    fix: { en: "Ensure class is concrete", si: "class check කරන්න" }
  },

  {
    key: "servletexception",
    message: { en: "Servlet error", si: "Servlet error" },
    fix: { en: "Check servlet configuration", si: "servlet config check කරන්න" }
  },
  {
    key: "timeoutexception",
    message: { en: "Process timeout", si: "Timeout error" },
    fix: { en: "Optimize execution", si: "code optimize කරන්න" }
  },
  {
    key: "connectionexception",
    message: { en: "Connection failed", si: "Connection error" },
    fix: { en: "Check network/DB connection", si: "network check කරන්න" }
  },
  {
    key: "unknownhostexception",
    message: { en: "Host not found", si: "Host හමුනොවුණා" },
    fix: { en: "Check URL/domain", si: "URL check කරන්න" }
  },
  {
    key: "socketexception",
    message: { en: "Socket connection error", si: "Socket error" },
    fix: { en: "Check server connection", si: "server check කරන්න" }
  },

  {
    key: "illegalthreadstateexception",
    message: { en: "Thread state error", si: "Thread error" },
    fix: { en: "Check thread lifecycle", si: "thread lifecycle check කරන්න" }
  },
  {
    key: "interruptedexception",
    message: { en: "Thread interrupted", si: "Thread stop වුණා" },
    fix: { en: "Handle thread properly", si: "thread handle කරන්න" }
  },
  {
    key: "filelockexception",
    message: { en: "File lock error", si: "File locked" },
    fix: { en: "Close file before access", si: "file close කරන්න" }
  },
  {
    key: "dataintegrityviolationexception",
    message: { en: "Data integrity error", si: "Database constraint error" },
    fix: { en: "Check DB constraints", si: "DB rules check කරන්න" }
  },
  {
    key: "transactionrollbackexception",
    message: { en: "Transaction failed", si: "Transaction rollback වුණා" },
    fix: { en: "Check DB transaction", si: "transaction check කරන්න" }
  },

  {
    key: "bufferoverflowerror",
    message: { en: "Buffer overflow", si: "Buffer overflow error" },
    fix: { en: "Check input size", si: "input size control කරන්න" }
  },
  {
    key: "notsupportedexception",
    message: { en: "Not supported operation", si: "Support නැහැ" },
    fix: { en: "Use valid operation", si: "valid method use කරන්න" }
  },
  {
    key: "parseexception",
    message: { en: "Parsing error", si: "Parse error" },
    fix: { en: "Check input format", si: "format check කරන්න" }
  },
  {
    key: "illegalmonitorstateexception",
    message: { en: "Monitor lock error", si: "Synchronization error" },
    fix: { en: "Fix synchronized blocks", si: "synchronized use කරන්න" }
  },
  {
    key: "noclassdeffounderror",
    message: { en: "Class definition missing at runtime", si: "Runtime class missing" },
    fix: { en: "Add dependency", si: "dependency add කරන්න" }
  },

  // EXTRA (to reach 65+)
  {
    key: "lambdaexpressionerror",
    message: { en: "Lambda expression error", si: "Lambda error" },
    fix: { en: "Check lambda syntax", si: "lambda syntax fix කරන්න" }
  },
  {
    key: "moduleexception",
    message: { en: "Module error", si: "Module error" },
    fix: { en: "Check module config", si: "module config check කරන්න" }
  },
  {
    key: "annotationexception",
    message: { en: "Annotation error", si: "Annotation error" },
    fix: { en: "Check annotations usage", si: "annotation check කරන්න" }
  },
  {
    key: "classformaterror",
    message: { en: "Class format invalid", si: "Class format error" },
    fix: { en: "Recompile project", si: "project rebuild කරන්න" }
  },
  {
    key: "verifyerror",
    message: { en: "Bytecode verification failed", si: "Bytecode error" },
    fix: { en: "Rebuild project", si: "clean build කරන්න" }
  }
];

module.exports = javaErrors;