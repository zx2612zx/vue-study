<template>
    <div class="item" :class="[item.completed?'completed':'' ]"> 
        <input type="checkbox" :checked="item.completed?'checked':'' " @click="completeItem(item.id)">
        <span>{{item.content}}</span>
        <button @click="delItem(item.id)">x</button>
    </div>
</template>

<script>
    export default {
        props:{
            item:{
                type:Object,
            }
        },
        methods:{
            delItem(id){
                this.$emit("delItem",id)
            },
            completeItem(id){
                this.$emit("completeItem",id)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .completed{
        text-decoration: line-through;
    }
    .item{
        text-align left
        margin-top 10px
        border 1px solid #ccc
        height 50px
        line-height 50px
        font-size 20px
        padding 0 30px
        background #f1e5e5a8
        input{
            width 20px
            height 20px
            vertical-align  middle
        }
    }
    .item:hover{
       button{
           display inline
           cursor pointer
       }
    }
    .item button{
        background transparent 
        outline none
        border none 
        font-size 30px
        line-height 50px
        color red        
        float right
        display none
    }
</style>
