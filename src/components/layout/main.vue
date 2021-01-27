<template>
  <div class="dz-main">
    <map3D></map3D>
    <div class="dz-main-body">
      <div class="dz-main-body-top">
        <dzTitle class="dz-title"></dzTitle>
        <dzTopTime class="dz-time"></dzTopTime>
      </div>
      <div class="dz-main-body-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import map3D from '../map3D'
import dzTitle from '../dzTitle'
import dzTopTime from '../dzTopTime'
export default {
  name: 'mainIndex',
  components: { map3D, dzTitle, dzTopTime },
  data () {
    return {
    }
  },
  mounted () {
    console.log('路由', this.$route)
  }
}
</script>
<style lang="less" scoped>
.dz-title {
  width: 200px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 26px;
  position: fixed;
  margin-left: -100px;
  top: 0px;
  left: 50%;
  z-index: 2;
}
.dz-time {
  width: 360px;
  height: 36px;
  line-height: 36px;
  position: fixed;
  right: 0;
  top: 30px;
  z-index: 2;
  text-align: right;
}
.dz-main {
  width: 100%;
  height: 100%;
  &-body {
  }
}
</style>
