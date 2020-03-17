<template>
    <ul>
        <todoItem
         v-for="(item,index) in myList" 
         :key='index'
         :content='item'
         :index="index"
         ></todoItem>
    </ul>
</template>

<script>
import todoItem from "./todo-item"
    export default {
        data(){
            return {}
        },
        computed:{
            myList(){
                console.log(this.$store.getters.list)
               return this.$store.getters.list;
            }
        },
        components:{
            todoItem
        }

    }
</script>

<style lang="scss" scoped>
    ul{
        text-align: center;
    }
</style>