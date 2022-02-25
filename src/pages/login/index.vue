<!--
 * @Author: songsunny
 * @Date: 2022-02-20 13:51:24
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-25 10:58:35
 * @Description: 登录页
 * @Github: https://github.com/songsunny00
-->
<template>
  <div>
    <h1>登陆页</h1>
    <button @click="onTapLogin">登录</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const router = useRouter()
      const onTapLogin = () => {
        console.log('onTapLogin')
        router.push({
          path: '/react'
        })
      }
      return {
        onTapLogin
      }
    }
  })
</script>
