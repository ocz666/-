<template>
  <div>
    <table class="layui-hide" id="test"></table>
  </div>
</template>

<script>
export default{
    mounted() {
        layui.use('table', function(){
            var table = layui.table;
            
            table.render({
                elem: '#test'
                ,url:[
                    {id:'2020-5-9-12:12:59',loc:'xx路口',number:'200',degree:'严重'}
                ]
                ,cols: [[
                {field:'id', width:80, title: '时间', sort: true},
                {field:'loc', width:80, title: '地点'},
                {field:'number', width:200, title: '每分钟车流量', sort: true},
                {field:'degree', width:120, title: '拥塞程度', sort: true},
                ]]
                ,page: true
            });
        });
    },
    }
</script>

<style scoped>
</style>
