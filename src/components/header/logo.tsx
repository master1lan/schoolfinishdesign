import schoolLogo from "@/assets/school_logo.png";
import style from "./header.module.less";
const Logo = () => (
  <div className={style.logoContent}>
    <img loading='lazy' src={schoolLogo} width={258} height={72} />
  </div>
);

export default Logo;
