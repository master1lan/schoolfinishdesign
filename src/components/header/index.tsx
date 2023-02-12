import { Layout } from "antd";
const { Header } = Layout;

import style from "./header.module.less";
import Login_Header from "./login";
import Logo from "./logo";
const Index = () => {
  return (
    <Header className={style.header}>
      <Logo />
      <Login_Header />
    </Header>
  );
};

export default Index;
