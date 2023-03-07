"use strict";

const Service = require("egg").Service;
class UserService extends Service {
  //返回所有用户名字
  async getAllUserName() {
    const { app } = this;
    try {
      const result = await app.mysql.select("user", {
        columns: ["username"],
      });
      return result;
    } catch (err) {
      return [];
    }
  }

  //通过用户名获取用户信息
  async getUserByName(username) {
    const { app } = this;
    try {
      const result = await app.mysql.get("user", { username });
      return result;
    } catch (err) {
      return {};
    }
  }

  //注册操作
  async register(parmas) {
    const { app } = this;
    try {
      const result = await app.mysql.insert("user", parmas);
      return result;
    } catch (err) {
      console.log({ err });
      return null;
    }
  }
  //修改用户信息
  async editUserInfo(params) {
    const { app } = this;
    try {
      // 通过 app.mysql.update 方法，指定 user 表，
      await app.mysql.update(
        "user",
        {
          ...params, // 要修改的参数体，直接通过 ... 扩展操作符展开
        },
        {
          where: {
            uuid: params.uuid,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = UserService;
