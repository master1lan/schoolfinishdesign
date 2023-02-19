import { Outlet, useLocation } from "umi";
import { Layout } from "antd";
const { Content } = Layout;
import styles from "./index.module.less";
import "normalize.css";
import Header from "@/components/header";
import Search from "@/components/search";
import LoginLayout from "./loginandregister";
export default function Index() {
  const location = useLocation();
  if (["/login", "/register"].includes(location.pathname)) {
    console.log(location.pathname);
    return <LoginLayout />;
  }
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles.content}>
        <Search />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
