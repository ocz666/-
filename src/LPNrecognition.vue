<template>
  <div>
    <!--  搜索监控 and 监控 -->
    <div class="monitor">
      <!-- 搜索监控 -->
      <div class="demoTable">
        搜索监控（地点）：
        <div class="layui-inline">
          <input
            class="layui-input inputbox"
            name="id"
            id="demoReload"
            autocomplete="off"
            v-model="location"
          />
        </div>
        <button class="layui-btn" @click="search">搜索</button>
      </div>
      <br />

      <!-- 监控 -->
      <video-player
        class="video-player vjs-custom-skin videocss"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      >
      </video-player>
    </div>

    <!-- 违规信息 -->
    <div class="info">
      <fieldset
        class="layui-elem-field layui-field-title"
        style="margin-top: 30px;"
      >
        <legend>机动车违规信息</legend>
      </fieldset>
      <ul class="layui-timeline">
        <li class="layui-timeline-item" v-for="item in infos" :key="item.ID">
          <i class="layui-icon layui-timeline-axis"></i>
          <div class="layui-timeline-content layui-text">
            <h3 class="layui-timeline-title">{{ item.time }}</h3>
            <p>
              在:{{ item.location }} <br />车牌号为:{{ item.car_number }}的车辆
              <br />{{ item.act }}
              <i class="layui-icon"></i>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: true,
        muted: true,
        language: "zh-CN",
        fluid: true,
        sources: [
          {
            type: "video/mp4",
            src: "/static/videos/movie.mp4",
          },
        ],
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
      },
      infos: [
        {
          ID: "11",
          time: "2020-5-30:12:00:00",
          location: "成都南路",
          car_number: "川Q123456",
          act: "不礼让行人",
        },
        {
          ID: "22",
          time: "2020-5-30:13:00:00",
          location: "成都北路",
          car_number: "川Q223456",
          act: "闯红灯",
        },
        {
          ID: "33",
          time: "2020-5-30:14:00:00",
          location: "成都中路",
          car_number: "川Q323456",
          act: "违规超车",
        },
      ],
      location: "成都南路",
      intervalid:null,
    };
  },
  methods: {
    search() {
      this.$jsonp("http://localhost:8080/api/searchloc", {
        loc: this.location,
      })
        .then((json) => {
          console.log('搜索视频成功')
          console.log(json)
          this.playerOptions.sources[0].src = "/static/videos/" + json[0].url
          clearInterval(this.intervalid)
          this.getinfo()
        })
        .catch((err) => {
          console.log(err)
        });
    },
    getinfo() {
      this.intervalid = setInterval(() => {
        this.$jsonp("http://localhost:8080/api/getinfo", {
          loc: this.location,
        })
          .then((json) => {
            this.infos=json
          })
          .catch((err) => {
            console.log(err);
          });
      },2000);
    },
  },
  beforeDestroy() {
    clearInterval(this.intervalid)
  },
  mounted() {},
};
</script>

<style scoped>
.monitor {
  width: 40%;

  float: left;
}
.info {
  margin-left: 60%;
  width: 20%;
}

.videocss {
  margin: 10px;
}
.inputbox {
  width: 405px;
}
</style>
