import { Button, Input, Select } from "antd";
import style from "./search.module.less";
const { Search } = Input;
const { Option } = Select;

const CustomSelectArr: { name: string; value: string }[] = [
  { name: "全文内容", value: "1" },
  { name: "标题", value: "" },
  { name: "案情特征", value: "" },
];

const CustomSearchSelectOption = () => (
  <Select defaultValue={"1"}>
    {CustomSelectArr.map(({ name, value }, index) => (
      <Option key={index} value={value}>
        {name}
      </Option>
    ))}
  </Select>
);

const Search_header = () => {
  return (
    <div className={style.search}>
      <Search
        addonBefore={<CustomSearchSelectOption />}
        allowClear
        size='large'
        width={`600px`}
      />
      <Button size='large'>在结果中搜索</Button>
      <Button size='large'>高级检索</Button>
    </div>
  );
};

export default Search_header;
