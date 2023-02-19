import { defineConfig } from "umi";

// const configRoute = [{ path: "/", component: "@/pages/index" }],
//   publicPathName = "schoolfinishdesign";
export default defineConfig({
  title: "信用案例分析系统",
  routes: [
    {
      path: "/login",
      component: "@/pages/user/login",
    },
    {
      path: "/register",
      component: "@/pages/user/register",
    },
    {
      path: "/",
      component: "@/pages/index",
    },
  ],
  npmClient: "pnpm",
});
