<template>
<!-- html -->

    <Person :list="personList" a="test"/>

</template>

<script lang="ts" setup>
  import Person from "./components/Person.vue";
  import {reactive} from 'vue'
  import { type Persons } from "@/types";

  let personList = reactive<Persons>([
    {id:'1', name:'bob',age:12},
    {id:'2', name:'peter',age:14},
    {id:'3', name:'alice',age:16},
  ])
</script>

