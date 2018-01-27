<template>
  <div id="todoContainer">
    <div>
      <input @keydown.enter="addItem" />
    </div>
    <div class="todoList" >
      <Item v-for="item in itemList" :key="item.id" :item="item" @delItem="delItem" @completeItem="completeItem"></Item>
    </div>
  </div>
</template>

<script>
    import Item from './item.vue'
    var id=0;
    export default {
      components:{
        Item
      },
      data(){
        return { 
          itemList:[]
        }
      },
      methods:{
        addItem(e){
          var content=e.target.value;
          if(content === ''){
            return;
          }
          this.itemList.unshift({
            content:content,
            completed:false,
            id:id++
          });
        },
        delItem(id){
          for( var i in this.itemList){
            var item = this.itemList[i];
            if(item.id === id){
              this.itemList.splice(i,1);
            }
          }
        },

        completeItem(id){
          for( var i in this.itemList){
            var item = this.itemList[i];
            if(item.id === id){
              item.completed=!item.completed;
            }
          }
        }
      }
    }
</script>

<style lang="stylus" scoped>
  #todoContainer{
    width 80%
    min-height 400px
    height 80%
    margin auto
    background rgba(183, 218, 218, 0.43)
    text-align  center
    padding 0 6%

    div input{
      width 100%
      height 60px
      margin-top 20px
      padding 0 20px
      border none 
      border-radius 10px
      color:white 
      font-size 20px
      box-sizing: border-box;
      background: #0000008a;
    }
    .todoList{
       min-height 400px
       height 80%
       overflow-y auto
    }

  }
</style>

