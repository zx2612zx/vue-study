<template>
  <div id="app">
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>
<style>

</style>

<script>
  import Header from './todo/header.vue';
  import Footer from './todo/footer.jsx';
  import Todo from './todo/todo.vue';
  export default {
    name:'APP',
    components:{
      Header,Footer,Todo
    }
  };
</script>

<style lang="stylus">
  html,body{
    height 100%
    margin 0px
    padding 0px
    
  }
  *{
    box-sizing border-box
  }
  #app{
    background url('./asserts/images/9605.jpg') no-repeat
    height 100%
    
  }
</style>
