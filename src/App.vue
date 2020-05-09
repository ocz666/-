<template>
  <div>
    <ul class="layui-nav" lay-filter="">
      <li class="layui-nav-item">
        <router-link to="/index" tag="a">首页</router-link>
      </li>
      <li class="layui-nav-item layui-this"><router-link to="/VehicleFlowDetection" tag="a">路口流量</router-link></li>
      <li class="layui-nav-item"><router-link to="/index" tag="a">车牌识别</router-link></li>
      <li class="layui-nav-item">
        <a herf="javascript:">机动车违规</a>
        <dl class="layui-nav-child">
          <dd><router-link to="/index" tag="a">违规停车</router-link></dd>
          <dd><router-link to="/index" tag="a">违规越线</router-link></dd>
          <dd><router-link to="/index" tag="a">闯红灯</router-link></dd>
          <dd><router-link to="/index" tag="a">不礼让行人</router-link></dd>
          <dd><router-link to="/index" tag="a">车速检测</router-link></dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <router-link to="/login" tag="a">登录/注册</router-link>
      </li>
    </ul>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    layui.use("element", function() {
      var element = layui.element;
      element.init();
    });
  },
  methods: {
  },
};
</script>

<style scoped></style>
