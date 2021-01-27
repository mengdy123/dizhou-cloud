<template>
  <div class="dz-title">
    {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
@import "@/style/color.less";
.dz-title {
  font-size: 14px;
  color: @white;
  display: flex;
}
.dz-title::before {
  content: "";
  width: 3px;
  height: 12px;
  background: @themeBlue;
  display: block;
  margin-right: 6px;
  margin-top: 4px;
}
</style>