import { Button, Input } from "antd";
import style from "./search.module.less";
const { Search } = Input;

const Search_header = () => {
  return (
    <div className={style.search}>
      <Search allowClear size='large' width={`600px`} />
      <Button size='large'>在结果中搜索</Button>
      <Button size='large'>高级检索</Button>
    </div>
  );
};

export default Search_header;
