/*
 * @Author: songsunny
 * @Date: 2022-02-20 19:46:17
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-20 19:49:01
 * @Description:
 * @Github: https://github.com/songsunny00
 */
import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useUserStore } from './modules/user'

const pinia = createPinia()

export { useAppStore, useUserStore }
export default pinia
