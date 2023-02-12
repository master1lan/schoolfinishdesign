import { Link, Outlet } from "umi";
import { Layout } from "antd";
import styles from "./index.module.less";
import "normalize.css";
import Header from "@/components/header";
export default function Index() {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Outlet />
    </Layout>
  );
}
