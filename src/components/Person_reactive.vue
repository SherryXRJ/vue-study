<template>
    <div class="person">
        <h2>xx{{car.brand}}xxx{{car.price}}xxx</h2>
        <button @click="changePrice">update</button>

        <h2>list</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{g.name}}</li>
        </ul>
        <button @click="changeGameName">update</button>
    </div>

</template>

<script lang="ts">
    export default {
        name: 'Person'    //组件名
    }
</script>

<script lang="ts" setup>

    //  reactive 只能定义对象的响应式数据类型
    import {reactive} from 'vue'

    let car = reactive({
        brand: 'bmw', price:1000
    })
    let games = reactive([
        {id: 'g1', name: 'game1'},
        {id: 'g2', name: 'game2'},
        {id: 'g3', name: 'game3'},
    ])

    function changePrice(){
        car.price += 1
    }

    function changeGameName(){
        games[0].name = 'update game1'
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