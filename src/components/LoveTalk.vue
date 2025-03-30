<template>
  <div class="talk">
    <button @click="getTalk">get</button>
    <ul>
      <li v-for="t in talkList" :key="t.id">{{t.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  import {reactive} from 'vue';
  import axios from 'axios';
  import { nanoid } from 'nanoid';

  let talkList = reactive([
    {id:'1', title:'title1'},
    {id:'2', title:'title2'},
    {id:'3', title:'title3'},
    {id:'4', title:'title4'},
    {id:'5', title:'title5'},
  ])

  async function getTalk(){
    let reuslt = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    let obj = {id: nanoid(), title:reuslt.data.content}
    talkList.unshift(obj)
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