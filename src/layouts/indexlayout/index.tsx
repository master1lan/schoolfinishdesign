import { Layout } from "antd";
import { Outlet } from "umi";
const { Sider, Content } = Layout;
import Header from "@/components/header";
import Search from "@/components/search";
import styles from "./index.module.less";
import Aside from "./aside";
export default function Index() {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout className={styles.content}>
        <Search />
        <Content>
          <Layout className={styles.layout_content}>
            <Sider className={styles.sider}>
              <Aside />
            </Sider>
            <Content>
              <Outlet />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
}
