<template>
  <div class="count">
    <h2>sum:{{countStore.sum}}</h2>
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

  const countStore = useCountStore()
  console.log(countStore.sum);
  
  let sum = ref(1)
  let n = ref(1)
  
  function getSum(){
    countStore.sum += n.value
  }

  function getMinus(){
    countStore.sum -= n.value
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