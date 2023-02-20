import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import AdvanceSearch from "./advanceSearch";
import style from "./search.module.less";
const { Search } = Input;

const Search_header = () => {
  const [show, set] = useState(false),
    handler = () => set((item) => !item);
  useEffect(() => {
    if (show) {
      // window.addEventListener('click',)
    }
  }, []);
  return (
    <div className={style.content}>
      <div className={style.search}>
        <Button size='large' onClick={handler}>
          高级检索
        </Button>
        <Search allowClear enterButton='搜索' size='large' width={`600px`} />
      </div>
      {show && <AdvanceSearch />}
    </div>
  );
};

export default Search_header;
