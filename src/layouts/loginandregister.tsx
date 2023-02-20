import { Button, Card, Divider, Form, Input } from "antd";
import { Link, Outlet, useLocation } from "umi";
import styles from "./login.module.less";
import schoolLogo from "@/assets/school_logo.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const useSelectORButton = () => {
  const location = useLocation(),
    isLoginPath = location.pathname === "/login",
    ButtonName = isLoginPath ? "注册" : "登录",
    linkTo = isLoginPath ? "/register" : "/login";
  return { ButtonName, linkTo };
};

export default function LoginLayout() {
  const { ButtonName, linkTo } = useSelectORButton();
  return (
    <Card className={styles.login_content}>
      <div className={styles.header}>
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
        //   onFinish={onFinish}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='用户名'
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
