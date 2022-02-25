<!--
 * @Author: songsunny
 * @Date: 2022-02-19 20:37:06
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-25 15:22:05
 * @Description: 
 * @Github: https://github.com/songsunny00
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
  // 启动微应用
  import startQiankun from './micro/index'
  import { defineComponent, onMounted } from 'vue'

  export default defineComponent({
    name: 'AppPage',
    setup() {
      onMounted(() => {
        console.log('++++++ mounted 2')
        if (!window.qiankunStarted) {
          window.qiankunStarted = true
          startQiankun()
        }
      })
    },
    onMounted() {
      console.log('App ===> 相当于 vue2.x 中 mounted')
      startQiankun()
    }
  })
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .test {
    color: $test-color;
  }
</style>
