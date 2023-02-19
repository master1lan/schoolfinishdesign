import { defineConfig } from "umi";
import CompressionPlugin from "compression-webpack-plugin";
const publicPathName = "schoolfinishdesign";
export default defineConfig({
  publicPath: `/${publicPathName}/`,
  base: `/${publicPathName}`,
  chainWebpack(config) {
    config.plugin("compression-webpack-plugin").use(CompressionPlugin, [
      //@ts-ignore
      {
        test: /\.(js|css|html)$/i,
        threshold: 10240,
        deleteOriginalAssets: false,
      },
    ]);
  },
});
