/*
 * @Author: hidetodong
 * @Date: 2022-08-14 18:56:51
 * @LastEditTime: 2022-08-14 18:56:52
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hidetoxic-ui/docs/vite.config.js
 * HIDETOXIC - 版权所有
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});