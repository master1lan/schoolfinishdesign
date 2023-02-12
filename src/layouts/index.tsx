import { Outlet } from "umi";
import { Layout } from "antd";
const { Content } = Layout;
import styles from "./index.module.less";
import "normalize.css";
import Header from "@/components/header";
import Search from "@/components/search";
export default function Index() {
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
