//js入口文件
import Vue from 'vue' 
import VueRouter from 'vue-router'
import { Header, Tabbar, TabItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap'
import './layui/css/layui.css'
import './layui/layui.all.js'
import 'jquery/dist/jquery.js'

import app from './App.vue'
import login from './Login.vue'
import VehicleFlowDetection from './VehicleFlowDetection.vue'


Vue.use(VueRouter)

var routerObj=new VueRouter({
  routes:[
    {path:'/',redirect:'/index'},
    {path:'/login', component: login},
    {path:'/VehicleFlowDetection',component: VehicleFlowDetection},
  ]
})


  
var vm = new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    components:{
        app,
        login,
        VehicleFlowDetection,
    },
    router:routerObj,
    // render:c=>c(app)
})