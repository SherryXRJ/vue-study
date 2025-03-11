<template>
  <div class="person">
    last name <input type="text" v-model="person.lastName"> <br>
    first name<input type="text" v-model="person.firstName"> <br>
    full name <span>{{fullName}}</span> <br>

    <button @click="changeFullName()">change full name</button>
  </div>
</template>

<script lang="ts">
  export default {
      name: 'Person'    //组件名
  }
</script>

<script lang="ts" setup>
  //  computed计算
  import {reactive, computed} from 'vue'

  let person = reactive({
    id: '1',
    lastName: 'zhang',
    firstName: 'san'
  });

  //  computed代理的对象 只读 不可写
  // let fullName = computed(() => {
  //   return person.lastName + '-' + person.firstName;
  // });

  //  computed代理的对象 只读 可写
  //  fullName为响应式数据
  let fullName = computed({
    set(val: string){
      console.log(val);

      person.firstName = val;
      person.lastName= val;

    },
    get(){
      return person.lastName + '-' + person.firstName;
    }
  });

  function changeFullName(){
    fullName.value = 'change name';
  }
</script>

<style scoped>
  .person {
      background-color: yellowgreen;
      padding: 20px;
  }

  button{
      margin: 0 5px;
  }
</style>