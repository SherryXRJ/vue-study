<template>
    <div class="person">
        <h2>{{person.name}}</h2>
        <h2>{{person.age}}</h2>

        <button @click="changeName">name</button>
        <button @click="changeAge">age</button>
    </div>

</template>

<script lang="ts">

</script>

<script lang="ts" setup>
    import {reactive, toRefs} from 'vue'

    let person = reactive({
        name: 'name',
        age:19
    })

    //  将 reactive 对象的属性转换为ref，从而保持响应式
    let {name, age} = toRefs(person)

    function changeName(){
       name.value += '.'
    }

    function changeAge(){
        age.value += 1
    }

</script>

<style scoped>
    .person {
        background-color: blue;
        padding: 20px;
    }

    button{
        margin: 0 5px;
    }
</style>