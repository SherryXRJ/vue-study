<template>
  <div class="person">
      <h2>sum: {{sum}}</h2>
      <button @click="add">sum</button>
      <hr>
      <img v-for="(dog, index) in dogList" :src="dog" :key="index">
      <button @click="getDog">more dog</button>
  </div>
</template>

<script lang="ts">
  export default {
      name: 'Person'    //组件名
  }
</script>

<script lang="ts" setup>
 
  import useSum from '@/hooks/useSum'
  import useDog from '@/hooks/useDog'
 
  const {sum, add} = useSum()
  const {dogList, getDog} = useDog()
  

</script>

<style scoped>
  .person {
      background-color: yellowgreen;
      padding: 20px;
  }

  button {
      margin: 0 5px;
  }

  img {
    height: 100px;
  }
</style>