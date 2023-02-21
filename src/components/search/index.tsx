import { Button, Input } from "antd";
import { Link } from "umi";
import { useEffect, useRef, useState } from "react";
import AdvanceSearch from "./advanceSearch";
import style from "./search.module.less";

const Search_header = () => {
  const [show, set] = useState(false),
    handlerClose = () => set(false),
    handler = () => set((item) => !item);
  const contentRef = useRef(null);
  useEffect(() => {
    const listerHanlder = (event: MouseEvent) => {
      //@ts-ignore
      const isInContain = contentRef.current!.contains(event.target);
      !isInContain && set(false);
    };

    if (show) {
      window.addEventListener("click", listerHanlder);
    }
    return () => window.removeEventListener("click", listerHanlder);
  }, [show]);
  return (
    <div className={style.content} ref={contentRef}>
      <div className={style.search}>
        <Button size='large' onClick={handler}>
          高级检索
        </Button>
        <Input allowClear />
        <Link to={"result"}>
          <Button size='large' disabled={show}>
            搜索
          </Button>
        </Link>
      </div>
      {show && <AdvanceSearch handlerClose={handlerClose} />}
    </div>
  );
};

export default Search_header;
