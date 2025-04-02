<template>
  <div class="talk">
    <button @click="getTalk">get</button>
    <ul>
      <li v-for="t in loveTalkStore.talkList" :key="t.id">{{t.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  import {reactive} from 'vue';
  import axios from 'axios';
  import { nanoid } from 'nanoid';
  import { useLoveTalkStore } from '@/store/LoveTalk';

  const loveTalkStore = useLoveTalkStore()

  //  监听数据的变化
  loveTalkStore.$subscribe((mutate, state) => {
      console.log('loveTalkStore中的保存的数据发生了变化', mutate, state);
      localStorage.setItem('list', JSON.stringify(state.talkList))
  })


  function getTalk(){
    loveTalkStore.getATalk()
  }
</script>

<style scoped>

.talk{
    padding: 10px;
    border-radius: 10px;
    background-color: green;
    box-shadow: 0 0 10px;
  }

  select, button{
    margin: 0 5px;
    height: 30px;
  }
</style>