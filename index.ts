import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger({ serviceName: "HelloWorld", logLevel: "DEBUG" });
let myPersonObject = {
  message: "This is the Message for Person Max",
  personID: "123",
  firstName: "Max",
  familyName: "Musterman",
  jobHistory: [
    {
      dateFrom: "2000-01-01",
      dateTo: "2001-01-01",
      jobID: 1,
    },
    {
      dateFrom: "2001-01-01",
      dateTo: "2002-01-01",
      jobID: 2,
    },
    {
      dateFrom: "2002-01-01",
      dateTo: "2020-01-01",
      jobID: 3,
    },
  ],
};
//Just a Test
//@ts-ignore
// logger.console = console;

logger.debug("debug");
logger.warn("warn");
logger.error("error");
logger.info("info");
logger.info(myPersonObject);
console.log("real logging");
console.warn("real warning");
console.info("real info");
console.log(myPersonObject); //With "outputCapture": "std" you only see "stringify" strings
process.stdout.write("std out");
process.stdout.write("std out");
