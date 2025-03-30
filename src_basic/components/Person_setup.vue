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
    export default {
        setup(){
            //  setup没有维护 this

            //  数据
            //  非响应式变量
            let name = '张三'
            let age = 19
            let tel = '13010230'

            //  方法
            function showTel(){
                name = 'new name'
                console.log(name);
                
            }

            function changeName(){
                age += 1
                console.log(age);
                
            }

            function changeAge(){
                alert(tel)
            }

            return{name, age, showTel, changeAge, changeName}
        }
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