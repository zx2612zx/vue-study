// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import ElementUI from 'element-ui'
import './themes/element-dark/index.css'

Vue.config.productionTip=false

Vue.use(ElementUI)

var vm=new Vue({
  el:'#app',
  data:{
    tableData: []
  },
  template:'<App :tableData="tableData"></App>',
  components:{App}
})
vm.tableData=[{
  aid:"1",
  date: '2016-05-03',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333
}]
