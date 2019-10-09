import '@pefish/js-node-assist'
import Starter from '@pefish/js-util-starter'
import ConfigUtil from '@pefish/js-util-config'

declare global {
  namespace NodeJS {
    interface Global {
      logger: any,
      config: object;
      debug: boolean;
    }
  }
}

Starter.startAsync(async () => {
  global.config = ConfigUtil.loadYamlConfig()
  global.debug = global.config[`env`] !== 'prod'
  global.logger.info(global.config)
}, null, true)


