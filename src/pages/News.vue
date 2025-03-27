<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 传参方式1: 嵌套route 传递参数 -->
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink> -->

        <!-- 传参方式2: 对象传参 -->
        <!-- <RouterLink :to="{
          //  name或path属性都可
          name:'detailName',
          // path: '/news/detail', 
          query: {
            id: news.id,
            title: news.title,
            content: news.content
          }
        }">{{news.title}}</RouterLink> -->

        <!-- params传参 方式1-->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink> -->

        <!-- params传参 方式2-->
        <RouterLink :to="{
          //  params必须使用name 不能用path
          name:'detailName',
          query:{
            id: news.id,
            title: news.title,
            content: news.content
            //  无法传数组类型
          }
        }">{{news.title}}</RouterLink>

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
    {id:'id1', title:'News1',content:'QQQQQQQQQQQ'},
    {id:'id2', title:'News2',content:'AAAAAAAAAAA'},
    {id:'id3', title:'News3',content:'CCCCCCCCCCC'},
    {id:'id4', title:'News4',content:'DDDDDDDDDDD'},
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