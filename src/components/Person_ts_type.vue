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
  import {type PersonIntetface} from '@/types'

  let person:PersonIntetface = {
    id:'1234214',
    name: 'bob',
    age: 12
  }

  let personList:Array<PersonIntetface> = [
    {
    id:'1234214',
    name: 'bob',
    age: 12
    },
    {
    id:'1234214',
    name: 'bob',
    age: 12
    }
  ]

 
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