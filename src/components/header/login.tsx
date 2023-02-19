import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./header.module.less";
import { Link } from "umi";

const Login_Header = () => {
  return (
    <div className={style.login}>
      <Link to={`/login`}>
        <Button size='small' type='text' icon={<UserOutlined />}>
          登录
        </Button>
      </Link>
      |
      <Link to={`/register`}>
        <Button size='small' type='text'>
          注册
        </Button>
      </Link>
    </div>
  );
};

export default Login_Header;
