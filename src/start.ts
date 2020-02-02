import '@pefish/js-node-assist'
import Starter from '@pefish/js-util-starter'
import ConfigUtil from '@pefish/js-util-config'
import { Log4js, GcloudLogging } from '@pefish/js-helper-logger'
declare global {
  namespace NodeJS {
    interface Global {
      logger: any,
      config: {[x: string]: any};
      debug: boolean;
    }
  }
}

Starter.startAsync(async () => {
  global.config = ConfigUtil.loadYamlConfig()
  global.debug = global.config.env !== 'prod'
  if (global.debug) {
    global.logger = new Log4js()
  } else {
    global.logger = new GcloudLogging()
  }

  global.logger.info(global.config)
}, null, true)


