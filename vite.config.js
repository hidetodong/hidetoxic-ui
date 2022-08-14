/*
 * @Author: hidetodong
 * @Date: 2022-08-14 16:26:42
 * @LastEditTime: 2022-08-14 22:15:21
 * @LastEditors: hidetodong
 * @Description:
 * @FilePath: /hidetoxic-ui/vite.config.js
 * HIDETOXIC - 版权所有
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "./config/unocss";
import { presetAttributify, presetIcons, presetUno } from "unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    unocss(),
  ],
  resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "HidetoxicUI",
      fileName: "hidetoxic-ui",
      formats: ["esm", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
