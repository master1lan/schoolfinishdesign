'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  const _crypto=middleware.crypto(); //加密解密字符串

  router.get('/', controller.home.index);
  //用户操作接口
  router.post('/api/user/register',_crypto, controller.user.register);  //注册
  router.post('/api/user/login',_crypto, controller.user.login);  //登录
  router.get('/api/user/get_userinfo', controller.user.getUserInfo); // 获取用户信息
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo); // 修改用户信息
  router.get('/api/user/login_jwt', _jwt, controller.user.loginWithjwt); //使用jwt登录
};
