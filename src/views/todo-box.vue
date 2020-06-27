<template>
    <div class='todo'>
        <h1>demo-todolist</h1>
        <input type="text" placeholder="请输入内容" v-model="val" v-on:keyup.enter="add">
        <button @click="add">添加</button>
        <todoList></todoList>
    </div>
</template>

<script>
import todoList from "./todo-list"
    export default {
        data(){
            return {
                val:""
            }
        },
        methods:{
            add(){
               this.$store.commit("add",this.val);
               this.val="";
            }
        },
        components:{
            todoList
        }
    }
</script>

<style lang="scss" scoped>
    $color1:red;
    $color2:chocolate;
    $color3:rgb(235, 228, 224);
    @mixin border{
       border:1px solid #ddd;
       outline: none;
    }
    .todo{
        >h1{
            color:$color1;
        }
        >input{
            width:16rem;
            height:2rem;
            padding-left:10px;
            @include border;
        }
        >button{
            width:3rem;
            height:2.3rem;
            color:$color3;
            background-color:$color2;
            @include border;
        }
    }
</style>