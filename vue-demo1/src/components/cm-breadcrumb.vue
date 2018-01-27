<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="cm-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    props:[
      "breadcrumbData"
    ]
  }
</script>


<style>
  .cm-breadcrumb{
    padding-bottom:10px;
    margin-bottom:10px;
    border-bottom:1px solid #ccc;
    min-width:400px;
  }
</style>
