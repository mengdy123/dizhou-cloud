<template>
  <div class="dz-content">
    <div class="dz-content-left">
      <leftDiv></leftDiv>
    </div>
    <div class="dz-content-right">这是右侧</div>
  </div>
</template>
<script>
import leftDiv from './components/homeLeftModule'
export default {
  components: { leftDiv },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
@import "@/style/color.less";
.dz-content {
  display: flex;
  color: @white;
  &-left {
    width: 420px;
    height: calc(100vh - 60px);
    background: @bgBlue;
    padding: 20px 20px;
    position: fixed;
    left: 0;
    top: 60px;
  }
  &-right {
    width: 420px;
    height: calc(100vh - 60px);
    background: @bgBlue;
    padding: 20px 20px;
    position: fixed;
    right: 0;
    top: 60px;
  }
}
</style>