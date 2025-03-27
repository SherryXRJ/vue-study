<template>
  <ul class="news-list">
    <!-- 从url query参数中取数 -->
    <li>编号：{{query.id}}</li>
    <li>标题：{{query.title}}</li>
    <li>内容：{{query.content}}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  //  useRoute是一个 hooks
  import {useRoute} from 'vue-router'

  import {toRefs} from 'vue';

  const route = useRoute()
  console.log(route);

  //  解构赋值 
  let {query} = toRefs(route) //  失去响应式 需要用toRefs函数


</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list>li {
    line-height: 30px;
  }
</style>