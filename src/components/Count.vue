<template>
  <div class="count">
    <h2>sum:{{countStore.sum}}, getter 修改原始数据{{bigSum}}</h2>
    <h2>info1:{{countStore.info1}}</h2>
    <h2>info2:{{countStore.info2}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="getSum">plus</button>
    <button @click="getMinus">minus</button>
  </div>
</template>

<script lang="ts" setup name="Count">
  import {ref} from 'vue'
  import {useCountStore} from '@/store/Count'
  import { storeToRefs } from 'pinia';
  const countStore = useCountStore()
  console.log(countStore.sum);

  //  从pinia store中解析对应的数据
  const {sum, info1, info2, bigSum} = storeToRefs(countStore)

  // let sum = ref(1)
  let n = ref(1)
  
  function getSum(){
    
    //  pinia修改数据方式1: 
    // countStore.sum += n.value

    //  pinia修改数据方式2: 一次性批量变更
    // countStore.$patch({
    //     sum: 111,
    //     info1:'1123',
    //     info2:'222'
    // })

    //  pinia修改数据方式3:
    countStore.increment(n.value)

  }

  function getMinus(){
    sum.value -= n.value
  }


</script>

<style scoped>

  .count{
    padding: 10px;
    border-radius: 10px;
    background-color: skyblue;
    box-shadow: 0 0 10px;
  }

  select, button{
    margin: 0 5px;
    height: 30px;
  }
</style>