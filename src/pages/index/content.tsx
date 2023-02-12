import { Pagination, Tag } from "antd";
import style from "./index.module.less";
export default function IndexContent() {
  return (
    <div className={style.content}>
      {Array.from({ length: 4 }, () => 1).map((_, index) => (
        <Item key={index} />
      ))}
      <Pagination
        total={85}
        pageSize={4}
        showSizeChanger={false}
        showQuickJumper={false}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          margin: "10px 0",
        }}
      />
    </div>
  );
}

const Item = () => {
  return (
    <section className={style.section}>
      <div className={style.section_name}>
        案例名称案例名称案例名称案例名称案例名称案例名称案例名称案例名称案例名称案例名称
      </div>
      <div className={style.section_feature}>
        <div className={style.section_feature_name}>案例特征：</div>
        <div>
          <Tag>不真正连带责任</Tag>
          <Tag>财产损害</Tag>
          <Tag>反证</Tag>
          <Tag>共同侵权</Tag>
          <Tag>故意</Tag>
          <Tag>过错责任原则</Tag>
          <Tag>精神损害</Tag>
          <Tag>连带责任</Tag>
          <Tag>侵犯人格平等</Tag>
          <Tag>侵犯人格自由</Tag>
          <Tag>请求财产损失</Tag>
          <Tag>请求恢复名誉</Tag>
          <Tag>职务侵权</Tag>
          <Tag>证人</Tag>
        </div>
      </div>
      <div className={style.section_description}>
        <div className={style.section_description_name}>案例描述：</div>
        <div className={style.section_description_content}>
          这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述
          这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述
          这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述
          这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述
          这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述这里是案例描述
        </div>
      </div>
      <div>etc</div>
    </section>
  );
};
