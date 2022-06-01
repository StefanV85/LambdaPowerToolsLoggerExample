"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@aws-lambda-powertools/logger");
const logger = new logger_1.Logger({ serviceName: "HelloWorld", logLevel: "DEBUG" });
logger.debug("debug");
logger.warn("warn");
logger.error("error");
logger.info("info");
console.log("real logging");
console.warn("real warning");
console.info("real info");
//# sourceMappingURL=index.js.map