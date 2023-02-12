import { Layout } from "antd";
import Aside from "./aside";
import IndexContent from "./content";
import style from "./index.module.less";
const { Sider, Content } = Layout;
export default function HomePage() {
  return (
    <Layout className={style.layout}>
      <Sider className={style.sider}>
        <Aside />
      </Sider>
      <Content>
        <IndexContent />
      </Content>
    </Layout>
  );
}
