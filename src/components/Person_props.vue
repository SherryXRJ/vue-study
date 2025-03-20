<template>
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">{{item.id}}-{{item.name}}-{{item.age}}</li>
    </ul>

  </div>
</template>

<script lang="ts">
  export default {
      name: 'Person'    //组件名
  }
</script>

<script lang="ts" setup>
  import {type Persons } from '@/types';
  import {defineProps, withDefaults} from 'vue'

  //  接收外部(父组件)传递的变量
  // defineProps(['xx'])

  //  param为一个对象(类似map)
  // defineProps(['list'])

  //  接收时限制类型 + 默认值
  withDefaults(defineProps<{list?:Persons}>(), {
    list: ()=> [{id:'1', name:'default', age:1}]
  })



</script>

<style scoped>
  .person {
      background-color: yellowgreen;
      padding: 20px;
  }

  button {
      margin: 0 5px;
  }
</style>