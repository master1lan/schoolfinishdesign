import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./header.module.less";

const Login_Header = () => {
  return (
    <div className={style.login}>
      <Button size='small' type='text' icon={<UserOutlined />}>
        登录
      </Button>
      |
      <Button size='small' type='text'>
        注册
      </Button>
    </div>
  );
};

export default Login_Header;
