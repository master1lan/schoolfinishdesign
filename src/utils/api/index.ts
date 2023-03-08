//todo 将项目部署上线
const localHost = `127.0.0.1:7001`;

const hostname = localHost;

const baseURl = `http://${hostname}/api`,
  userPath = `${baseURl}/user`;
export default {
  userRegister: `${userPath}/register`,
  userLogin: `${userPath}/login`,
  userLoginWithJWT: `${userPath}/login_jwt`,
};
