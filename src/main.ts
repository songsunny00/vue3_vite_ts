/*
 * @Author: songsunny
 * @Date: 2022-02-17 17:13:23
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-27 21:47:22
 * @Description: 
 * @Github: https://github.com/songsunny00
 */
import { createApp } from 'vue'
import "./public-path"
import App from './App.vue'
import router from './router/index'
import piniaStore from './store'

let app
function render() {
    app = createApp(App)

    app.use(router)
    app.use(piniaStore)

    app.mount('#app')

}


// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log("VueMicroApp bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
    console.log("VueMicroApp mount", props);
    render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
    console.log("VueMicroApp unmount");
    app.$destroy();
    app = null
    router = null;
}
