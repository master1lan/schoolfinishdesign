import { defineConfig } from "umi";

const configRoute = [{ path: "/", component: "@/pages/index" }],
  publicPathName = "schoolfinishdesign";
export default defineConfig({
  title: "信用案例分析系统",
  routes: [
    ...configRoute,
    ...configRoute.map(({ path, component }) => ({
      path: `/${publicPathName}${path}`,
      component,
    })),
    // { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
  // publicPath: "/schoolfinishdesign/",
});
