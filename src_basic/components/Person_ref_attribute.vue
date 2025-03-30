<template>
  <div class="person">
    <h1>h1 ...</h1>
    <h2 ref="h2">h2 ...</h2>
    <h3>h3 ...</h3>
    <button @click="getDom">getDom</button>
  </div>
</template>

<script lang="ts">

</script>

<script lang="ts" setup>
  import {ref, defineExpose} from 'vue'

  //  用于存储ref标记的内容
  let h2 = ref();

  let outer = ref(0);

  function getDom(){
    console.log(h2.value);
  }

  //  向外部暴露 组件内部的内容， 暴露了外部才能访问 (外部需在vue组件上使用 ref属性)
  defineExpose({outer})
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