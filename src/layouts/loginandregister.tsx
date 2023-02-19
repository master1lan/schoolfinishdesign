import { Card } from "antd";
import { Outlet } from "umi";
import styles from "./login.module.less";
import schoolLogo from "@/assets/school_logo.png";
export default function LoginLayout() {
  return (
    <Card className={styles.login_content}>
      <div className={styles.header}>
        <img
          loading='lazy'
          src={schoolLogo}
          width={258}
          height={72}
          className={styles.logo}
        />
        <p>信用案例分析系统</p>
      </div>
      <Outlet />
    </Card>
  );
}
