import { useLocation } from "umi";
import { RecoilRoot } from "recoil";
import "normalize.css";
import LoginLayout from "./loginandregister";
import IndexLayout from "./indexlayout";
export default function Index() {
  /**
   * 这一组件用于给全局添加context等状态转移组件。
   */
  return (
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  );
}

const Root = () => {
  const location = useLocation();
  if (["/login", "/register"].includes(location.pathname)) {
    // console.log(location.pathname);
    return <LoginLayout />;
  }
  return <IndexLayout />;
};
