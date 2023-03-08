import { Button, Card, Divider, Form, Input } from "antd";
import { Link, Outlet, useLocation } from "umi";
import styles from "./login.module.less";
import schoolLogo from "@/assets/school_logo.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { passwordCrypto, userInfoCrypto } from "@/utils/fetch/func";
import api from "@/utils/api";

const useSelectORButton = () => {
  const location = useLocation(),
    isLoginPath = location.pathname === "/login",
    ButtonName = isLoginPath ? "注册" : "登录",
    linkTo = isLoginPath ? "/register" : "/login",
    currentType = isLoginPath ? "login" : "register";
  return { ButtonName, linkTo, currentType };
};

export type LoginAndRegisterFormType = Record<"username" | "password", string>;

export default function LoginLayout() {
  const { ButtonName, linkTo, currentType } = useSelectORButton();
  const onFinish = (value: LoginAndRegisterFormType) => {
    console.log(value);
    const cryptoedPassowrd = passwordCrypto(value.password);
    fetch(api.userRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: userInfoCrypto({ ...value, ...cryptoedPassowrd }),
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <Card className={styles.login_content}>
      <div className={`${styles.header} mb-2`}>
        <img
          loading='lazy'
          src={schoolLogo}
          width={258}
          height={72}
          className={styles.logo}
        />
        <p>信用案例分析系统</p>
      </div>

      <Form
        name='normal_login'
        className={styles["login-form"]}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='用户名'
            className='h-10'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='密码'
            className='h-10'
          />
        </Form.Item>
        <Form.Item>
          <Outlet />
        </Form.Item>
        <Divider>或者</Divider>
        <Form.Item>
          <Link to={linkTo}>
            <Button type='primary' htmlType='submit' block>
              {ButtonName}
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </Card>
  );
}
