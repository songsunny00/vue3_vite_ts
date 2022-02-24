/*
 * @Author: songsunny
 * @Date: 2022-02-17 17:13:23
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-20 14:50:00
 * @Description:
 * @Github: https://github.com/songsunny00
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', //打包路径
  server: {
    port: 8001,
    open: true,
    cors: true
  },
  resolve: {
    // 配置别名--__dirname 找不到 需要 yarn add @types/node --save-dev
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/variables.scss";'
      }
    }
  }
})
