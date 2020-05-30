//js入口文件
import Vue from 'vue' 
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VideoPlayer from 'vue-video-player'
import  VueJsonp  from  'vue-jsonp'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
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
Vue.use(VideoPlayer)
Vue.use(VueResource)
Vue.use(VueJsonp)

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
})