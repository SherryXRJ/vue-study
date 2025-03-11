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
        name: 'Person',
        data(){
            return {
                name:'bob',
                age:12,
                tel:'13111111111'
            }
        },
        /**
         * showTel
         */
        methods: {
            showTel(){
                alert(this.tel)
            },
            changeAge(){
                this.age += 1
            },
            changeName(){
                this.name = 'change-'
            }
        },
        setup(){
            
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