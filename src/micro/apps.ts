/*
 * @Author: songsunny
 * @Date: 2022-02-24 17:00:06
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-25 10:58:21
 * @Description:注册微应用
 */
const apps = [
  {
    name: 'ReactMicroApp', // name: 微应用名称 - 具有唯一性
    entry: '//localhost:3000', // 微应用入口 - 通过该地址加载微应用
    container: '#iframe', // 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
    activeRule: '/react' // 微应用触发的路由规则 - 触发路由规则后将加载该微应用
  }
]

export default apps
