import { Logger } from "@pefish/js-logger";
import Starter, { StartArgs } from "@pefish/js-starter";

declare global {
  var logger: Logger;
}

async function main(args: StartArgs) {
  globalThis.logger = args.logger;
  globalThis.logger.info(process.env.LOG_LEVEL);
}

async function onExited(err: Error) {}

Starter.start(main, onExited);
