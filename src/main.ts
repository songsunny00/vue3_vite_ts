/*
 * @Author: songsunny
 * @Date: 2022-02-17 17:13:23
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-25 14:58:36
 * @Description:
 * @Github: https://github.com/songsunny00
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import piniaStore from './store'

const app = createApp(App)

app.use(router)
app.use(piniaStore)

app.mount('#main-app')
