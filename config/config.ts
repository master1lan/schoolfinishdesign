import { defineConfig } from "umi";

export default defineConfig({
  title: "信用案例分析系统",
  routes: [
    { path: "/", component: "@/pages/index" },
    // { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  publicPath: "/schoolfinishdesign/",
});
