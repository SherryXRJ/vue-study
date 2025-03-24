<template>
  <ul class="news-list">
    <li>编号：{{route.query.query1}}</li>
    <li>标题：{{route.query.query2}}</li>
    <li>内容：xxx</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  //  useRoute是一个 hooks
  import {useRoute} from 'vue-router'

  const route = useRoute()
  console.log(route);


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