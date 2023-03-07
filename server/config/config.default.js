/* eslint valid-jsdoc: "off" */

// 配置文件

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1653455034826_2254';

  // add your middleware config here
  config.middleware = [];
  config.jwt = {
    secret: 'Nick',
  };
  config.mysql = {
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'suxiaobai2014',
      // 数据库名
      database: 'bishe',
      charset: 'utf8mb4',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.redis = {
    clients: {
      //存放token的
      token: {
        port: 6379,
        host: "127.0.0.1",
        password: null,
        db: 0,
      },
      
    },
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ], // 配置白名单
  };

  config.cors = {
    origin: '*', // 允许所有跨域访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 允许的方法
    maxAge: 6000,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload',
    hostUrl: 'http://127.0.0.1:7001',
  };
  config.multipart = {
    mode: 'file',
    fileSize: '10mb',
  };

  return {
    ...config,
    ...userConfig,
  };
};

