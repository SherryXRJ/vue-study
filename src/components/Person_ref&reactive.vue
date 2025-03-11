<template>
    <div class="person">
        <h2>xx{{car.brand}}xxx{{car.price}}xxx</h2>
        <button @click="changePrice">update</button>
        <button @click="changeBrand">changeBrand</button>

        <h2>list</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{g.name}}</li>
        </ul>
        <button @click="changeGameName">update</button>

        <button @click="changeCar">change car</button>
    </div>

</template>

<script lang="ts">
    export default {
        name: 'Person'    //组件名
    }
</script>

<script lang="ts" setup>

    //  ref 与对象数据类型
    import {ref, reactive} from 'vue'


    //  reactive 只能修改对象中的属性值，如果修改对象则会失效
    //  可借助Object.assign()进行赋值
    let car = reactive({
        brand: 'bmw', price:1000
    })

    let games = ref([
        {id: 'g1', name: 'game1'},
        {id: 'g2', name: 'game2'},
        {id: 'g3', name: 'game3'},
    ])

    function changePrice(){
        car.price += 1

    }

    function changeGameName(){
        games.value[0].name = 'update game1'
    }

    function changeBrand(){
        car.brand = 'new brand'
    }

    function changeCar(){
        //  借助Object.assign reactive 
        Object.assign(car, {brand :'new Car', price: '9999'})
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