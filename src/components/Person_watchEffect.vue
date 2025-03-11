<template>
  <div class="person">
    <h2>sum1:{{sum1}}</h2>
    <h2>sum2:{{sum2}}</h2>
    <button @click="changeSum1">sum1 +1</button>
    <button @click="changeSum2">sum2 +1</button>
  </div>
</template>

<script lang="ts">
  export default {
      name: 'Person'    //组件名
  }
</script>

<script lang="ts" setup>
  import {ref, watch, watchEffect} from 'vue'

  let sum1 = ref(0)
  let sum2 = ref(0)

  function changeSum1(){
    sum1.value += 1;
  
  }
  function changeSum2(){
    sum2.value += 1;
  }

  //  通过watch监视多个数据,需要显示地编码各个数据
  watch([sum1, sum2], (newVal, oldVal) =>{
      let[newSum1, newSum2] = newVal;
      if(newSum1 > 10 || newSum2 > 10){
          console.log('watch');
      }
  })


  //  watchEffect 全局监视
  watchEffect(() =>{
    if(sum1.value > 10 || sum2.value >10){
      console.log('watchEffect');
    }
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