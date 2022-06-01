import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger({ serviceName: "HelloWorld", logLevel: "DEBUG" });
logger.debug("debug");
logger.warn("warn");
logger.error("error");
logger.info("info");
console.log("real logging");
console.warn("real warning");
console.info("real info");
process.stdout.write("something");
process.stdout.write("something");
process.stdout.write("something");
