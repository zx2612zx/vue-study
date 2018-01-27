<template>
  <el-container class="container">
    <el-header class='cm-header'>Vue Demo 学习</el-header>
    <el-container>
      <el-aside>
        <CUSTOM_MENU></CUSTOM_MENU>
      </el-aside>
      <el-main class="cm-main">
          <CM_BREADCRUMB></CM_BREADCRUMB>
          <CUSTOM_TABLE :tableData="tableData"></CUSTOM_TABLE>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>

  .container{
    min-height:100%;

  }

  .cm-header{
    box-shadow: -1px 1px 12px #aba2a2;
    border-radius: 4px;
  }

  .el-header {
    background:rgb(84, 92, 100);
    margin-bottom: 10px;
    color: white;
    font-size:20px;
    border: 1px solid #ccc;
    line-height: 60px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  .el-aside {
    border-radius: 5px;
    background-color: rgb(84, 92, 100);
    min-height:100%;
  }

  .cm-main{
    margin: 2px 10px;
    box-shadow: -1px -1px 12px #aba2a2;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
</style>

<script>
  import CM_TABLE from './components/cm-table';
  import CM_MENU from './components/cm-menu';
  import CM_BREADCRUMB from './components/cm-breadcrumb';
  export default {
    name:'APP',
    props:["tableData"],
    components:{
      "CUSTOM_TABLE":CM_TABLE,
      "CUSTOM_MENU":CM_MENU,
      "CM_BREADCRUMB":CM_BREADCRUMB
    }
  };
</script>
