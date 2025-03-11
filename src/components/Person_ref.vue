<template>
    <div class="person">
        <h2>name: {{name}}</h2>
        <h2>age: {{age}}</h2>
        <button @click="showTel">查看</button>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts">
//  vue2 选项式api
    export default {}
</script>

<script lang="ts" setup>
    //  导入ref
    import {ref} from 'vue'

    //  ref与基本数据类型
    let name = ref('张三')
    let age = ref(19)
    let tel = '13010230'

    //  方法
    function changeName(){
        name.value = 'new name'
        console.log(name);
        
    }

    function changeAge(){
        age.value += 1
        console.log(age);
        
    }

    function showTel(){
        alert(tel)
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