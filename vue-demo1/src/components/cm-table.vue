<template>
  <div>
    <el-table
      :data="tableData"
      border
      fit
      size="small"
      style="width: 100%">
      <el-table-column
      resizable
        prop="date"
        label="日期"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        min-width="150">
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="200">
        <template slot-scope="scope" >
          <el-button @click="handleClick(scope.row.aid)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total,prev, pager, next"
      :total="1000" >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name:'CUSTOM_TABLE',
    props:["tableData"],
    methods:{
      handleClick:function(a){
        this.$message(a);
      }
    }
  }
</script>

<style>
  .el-pagination{
    margin-top:10px;
    float:right;
  }
</style>
