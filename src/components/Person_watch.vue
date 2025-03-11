<template>
  <div class="person">
    <h2>场景1 ref 监视基础数据类型:{{sum}}</h2>
    <button @click="changeSum()">+1</button> <br>

    <h2>场景2 ref 监视基础对象数据类型</h2>
    <span>{{newPerson.name}}   {{newPerson.age}}</span>
    <button @click="changeName()">change name</button> <br>
    <button @click="changeAge()">change age</button> <br>
    <button @click="changePerson()">change person</button> <br>

    <h2>场景3 reactive 监视对象数据类型</h2>
    <span>{{reactivePerson.name}}   {{reactivePerson.age}}</span>
    <button @click="changeName1()">change name</button> <br>
    <button @click="changeAge1()">change age</button> <br>
    <button @click="changePerson1()">change person</button> <br>

    <h2>场景4 监视ref或reactive响应式对象中某个属性</h2>
    <span>{{attributeReactivePerson.name}}   {{attributeReactivePerson.age}} {{attributeReactivePerson.car.c1}} {{attributeReactivePerson.car.c2}}</span>
    <button @click="changeName2()">change name</button> <br>
    <button @click="changeAge2()">change age</button> <br>
    <button @click="changeCar1()">change c1</button> <br>
    <button @click="changeCar2()">change c2</button> <br>
    <button @click="changeCar()">change car</button> <br>

    <h2>场景5 监视多个数据</h2>
    <span>{{attributeReactivePerson.name}}   {{attributeReactivePerson.age}} {{attributeReactivePerson.car.c1}} {{attributeReactivePerson.car.c2}}</span>
    <button @click="changeName2()">change name</button> <br>
    <button @click="changeAge2()">change age</button> <br>
    <button @click="changeCar1()">change c1</button> <br>
    <button @click="changeCar2()">change c2</button> <br>
    <button @click="changeCar()">change car</button> <br>


  </div>
</template>

<script lang="ts">
  export default {
      name: 'Person'    //组件名
  }
</script>

<script lang="ts" setup>
  import {reactive, ref, watch} from 'vue'

  let sum = ref(0)

  //  场景1 添加ref常量监视 
  const stopWatch = watch(sum, (newVal, oldVal)=> {
      if(newVal>10){
        stopWatch;
      }
  })

  function changeSum(){
    sum.value += 1;
  }

  //  场景2 ref对象数据
  let newPerson = ref({
    name: '张三',
    age: 11
  });

  function changeName() {
    newPerson.value.name += '~';
  }

  function changeAge() {
    newPerson.value.age +=1
  }

  function changePerson(){
    newPerson.value = {name:'newName', age:11}
  }

  //  场景2: 监视对象地址的变化
  //  如果要监听对象中的属性编码 则需要开启深度模式
  //  一定要注意是地址变化 还是属性值变化 影响newVal oldVal
  watch(newPerson, (newVal, oldVal)=>{
    console.log(newVal);
    console.log(oldVal);
    
  }, {deep: true})


  //  场景3: 监视reacive定义的对象; 默认是深度监视
  let reactivePerson = reactive({
    name: '张三',
    age: 11
  });

  function changeName1() {
    reactivePerson.name += '~';
  }

  function changeAge1() {
    reactivePerson.age +=1
  }

  function changePerson1(){
    //  reactive 不能整体修改
    // reactivePerson = {name:'newName', age:11}

    Object.assign(reactivePerson, {name:'newName', age:11})
  }

  watch(reactivePerson, (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
  })


  //  场景4: 监视ref或 reactive 对象中的某个属性
  let attributeReactivePerson = reactive({
    name: 'xxx',
    age: 12,
    car:{
      c1: 'c1',
      c2: 'c2'
    }
  })

  function changeName2() {
    attributeReactivePerson.name += '~';
  }

  function changeAge2() {
    attributeReactivePerson.age +=1
  }

  function changeCar1() {
    attributeReactivePerson.car.c1 += '🚗'
  }

  function changeCar2() {
    attributeReactivePerson.car.c2 += '🚗'
  }

  function changeCar() {
    attributeReactivePerson.car = {
      c1:'new c1',
      c2:'new c2'
    }
  }

  //  监视函数
  watch(() => {return attributeReactivePerson.name}, (newVal, oldVal)=>{
      console.log(newVal, oldVal);
  })

  watch(() => attributeReactivePerson.car, (newVal, oldVal)=>{
      console.log(newVal, oldVal);
  }, {deep: true})


  //  场景5: 监视多个数据
  //  newVal 会给一个数组
  watch([
    () => {return attributeReactivePerson.name},
    () => attributeReactivePerson.car
  ], (newVal, oldVal)=>{
      console.log(newVal, oldVal);
  }, {deep: true})


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