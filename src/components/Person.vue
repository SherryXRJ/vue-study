<template>
  <div class="person">

  </div>
</template>

<script lang="ts">
  export default {
      name: 'Person'    //组件名
  }
</script>

<script lang="ts" setup>
  import {ref, defineExpose} from 'vue'

  let person = {
    id:'1234214',
    name: 'bob',
    age: 12
  }
 
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