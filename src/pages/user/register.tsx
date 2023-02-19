import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "umi";
import { Form, Button, Input, Divider } from "antd";
import styles from "./login.module.less";
export default function Register() {
  /**
   *
   */
  return (
    <>
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
          <Button type='primary' htmlType='submit' block>
            注册
          </Button>
        </Form.Item>
        <Divider>或者</Divider>
        <Form.Item>
          <Link to={`/login`}>
            <Button type='primary' htmlType='submit' block>
              登录
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
}
