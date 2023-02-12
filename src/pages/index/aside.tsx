import { Card, List } from "antd";
import style from "./index.module.less";
export default function Aside() {
  return (
    <div className={style.container}>
      <Card
        title='左侧显示快捷选择项'
        style={{ borderRadius: "0", background: "rgb(245,245,245)" }}
      ></Card>
      <Card
        title='法院层级'
        style={{ borderRadius: "0", background: "rgb(245,245,245)" }}
      >
        <List
          dataSource={["高级法院", "中级法院", "基层法院", "专门法院"]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
      <Card
        title='审批年份'
        style={{ borderRadius: "0", background: "rgb(245,245,245)" }}
      >
        <List
          dataSource={["近1年", "近3年", "近5年", "2022", "2021"]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Card>
    </div>
  );
}
