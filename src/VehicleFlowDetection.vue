<template>
  <div>
    <div class="flex-container">
      <!-- 监控视频 -->
      <div class="flex-item" v-for="(item, i) in playerOptions" :key="i">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="item"
        >
        </video-player>
      </div>

      <!-- 添加视频 -->
      <div class="flex-item">
        <form>
          <div class="form-group">
            <label for="exampleFormControlFile1">添加监控视频</label>
            <input
              type="file"
              class="form-control-file"
              @change="addVideo($event)"
            />
            <input type="button" value="确定" @click="reload" />
          </div>
        </form>
      </div>
    </div>

    <!-- 数据表格 -->
    <table class="layui-hide" id="test"></table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addvideoflag:false,
      playerOptions: [],
      CarFlow: [],
    };
  },
  methods: {
    reload() {
      if(this.addvideoflag){
        this.$forceUpdate();
      }
    },
    getCarFlow() {
      this.$jsonp("http://localhost:8080/api/getcarflow")
        .then((json) => {
          layui.use("table", function() {
            console.log(json);
            this.CarFlow = json;
            var table = layui.table;
            table.render({
              elem: "#test",
              data: json,
              page: true,
              cellMinWidth: 80, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
              cols: [
                [
                  { field: "ID", width: 100, title: "ID" },
                  { field: "time", width: 200, title: "时间" },
                  { field: "loc", width: 500, title: "地点" },
                  { field: "number", width: 326, title: "车流量", sort: true },
                  {
                    field: "degree",
                    width: 400,
                    title: "拥塞程度",
                    sort: true,
                  },
                ],
              ],
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVideosUrl() {
      this.$jsonp("http://localhost:8080/api/getvideo")
        .then((json) => {
          console.log(json);
          var playeroptions = [];
          for (let item in json) {
            var playeroption = {
              playbackRates: [0.5, 1.0, 1.5, 2.0],
              autoplay: false,
              muted: true,
              language: "zh-CN",
              fluid: true,
              sources: [
                {
                  type: "video/mp4",
                  src: "/static/videos/" + json[item].url,
                  // src: json[item],
                  // src: "/static/videos/movie.mp4",
                },
              ],
              notSupportedMessage: "此视频暂无法播放，请稍后再试",
            };
            playeroptions.push(playeroption);
          }
          this.playerOptions = playeroptions;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addVideo(event) {
      this.$jsonp("http://localhost:8080/api/addvideo", {
        path: event.target.files[0].name,
      })
        .then((json) => {
          if(json.status===200){
            this.addvideoflag=true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {},
  mounted() {
    this.getCarFlow();
    this.getVideosUrl();
  },
};
</script>

<style scoped>
.flex-container {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  background-color: lightgrey;
  flex-wrap: wrap;
  flex-direction: row;
}

.flex-item {
  background-color: cornflowerblue;
  width: 30%;
  height: 260px;
  margin: 10px;
}
</style>
