/*
 * @Author: songsunny
 * @Date: 2022-02-20 19:52:28
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-20 19:57:24
 * @Description: 
 * @Github: https://github.com/songsunny00
 */
import { defineStore } from 'pinia'
import { UserState } from './types'

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        user_name: undefined,
        avatar: undefined,
        organization: undefined,
        location: undefined,
        email: undefined,
        blogJuejin: undefined,
        blogZhihu: undefined,
        blogGithub: undefined,
        profileBio: undefined,
        devLanguages: undefined,
        role: '',
    }),
    getters: {
        userProfile(state: UserState): UserState {
            return { ...state };
        }
    },
    actions: {
        async insertPost(data: string) {
            // 可以做异步
            // await doAjaxRequest(data);
            this.name = data;
        }
    }
})