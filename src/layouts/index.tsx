import { useLocation } from "umi";
import "normalize.css";
import LoginLayout from "./loginandregister";
import IndexLayout from "./indexlayout";
export default function Index() {
  const location = useLocation();
  if (["/login", "/register"].includes(location.pathname)) {
    // console.log(location.pathname);
    return <LoginLayout />;
  }
  return <IndexLayout />;
}
