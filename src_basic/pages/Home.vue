<template>
  <div class="home">
    Home
  </div>
</template>

<script setup lang="ts" name="Home">
  import {onMounted} from 'vue'
  import {useRouter} from 'vue-router'

  //  编程式路由导航 直接操作router
  const router = useRouter()

  // onMounted(() => {
  //   setTimeout(() =>{
  //     router.push('/news')
  //   }, 3000)
  // })

  
</script>

<style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>