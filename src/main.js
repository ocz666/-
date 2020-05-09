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


Vue.use(VueRouter)

var routerObj=new VueRouter({
  routes:[
    {path:'/login', component: login}
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
        login
    },
    router:routerObj,
    // render:c=>c(app)
})