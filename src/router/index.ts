/*
 * @Author: songsunny
 * @Date: 2022-02-20 13:05:32
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-20 13:56:27
 * @Description: 路由配置
 * @Github: https://github.com/songsunny00
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页'
        },
        component: () => import('@/pages/home/index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/pages/error/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router