import { Logger } from "@pefish/js-logger";
import Starter, { StartArgs } from "@pefish/js-starter";

declare global {
  namespace NodeJS {
    interface Global {
      logger: Logger;
    }
  }
}

async function main(args: StartArgs) {
  global.logger = args.logger;
  global.logger.info(process.env.LOG_LEVEL);
}

async function onExited(err: Error) {}

Starter.start(main, onExited);
