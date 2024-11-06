import "@pefish/js-node-assist";
import Starter from "@pefish/js-util-starter";
import "dotenv/config";
import * as log4js from "log4js";

log4js.configure({
  appenders: { console: { type: "console" } },
  categories: { default: { appenders: ["console"], level: "info" } },
});

declare global {
  namespace NodeJS {
    interface Global {
      logger: log4js.Logger;
      debug: boolean;
    }
  }
}

global.debug = process.env["LOG_LEVEL"] == "debug";
global.logger = log4js.getLogger();

Starter.startAsync(async () => {
  global.logger.info(process.env);
}, false);
