<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink to="/news/detail?id=">{{news.title}}</RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import {reactive} from 'vue';
  import {RouterLink, RouterView} from 'vue-router';

  const newsList = reactive([
    {id:'id1', title:'News1',conent:'QQQQQQQQQQQ'},
    {id:'id2', title:'News2',conent:'AAAAAAAAAAA'},
    {id:'id3', title:'News3',conent:'CCCCCCCCCCC'},
    {id:'id4', title:'News4',conent:'DDDDDDDDDDD'},
  ])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #64967E;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>