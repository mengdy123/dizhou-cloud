<template>
  <div class="test">
    <div id="container"></div>
  </div>
</template>
<script>
import MapLoader from '@/utils/AMap'
export default {
  data () {
    return {
      map: null,
      map3D: null,
      object3Dlayer: null
    }
  },
  mounted () {
    this.init()
    // let that = this
    // MapLoader().then(
    //   (AMap) => {
    //     console.log('地图加载成功')
    //     that.map = new AMap.Map('container', {
    //       center: [121.335658, 31.198233],
    //       zoom: 11,
    //       mapStyle: 'amap://styles/darkblue' // 设置地图的显示样式
    //     })
    //   },
    //   (e) => {
    //     console.log('地图加载失败', e)
    //   }
    // )

  },
  methods: {
    async init () {
      // 创建地图实例
      let that = this
      MapLoader().then(
        (AMap) => {
          that.map3D = new AMap.Map('container', {
            viewMode: '3D',
            pitch: 30,
            rotation: 25,
            zoom: 16,
            center: [121.499809, 31.236666],
            mapStyle: 'amap://styles/macaron',
            showIndoorMap: false
          })
          that.object3Dlayer = new AMap.Object3DLayer();
          that.map3D.add(that.object3Dlayer);
          setTimeout(() => {
            // 创建Object3DLayer图层


            that.map3D.plugin(["AMap.GltfLoader"], function () {
              let druckMeshes,
                cityMeshes
              console.log('地图加载成功2')
              const urlCity = 'https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf';
              const urlDuck = 'https://a.amap.com/jsapi_demos/static/gltf/Duck.gltf';
              const paramCity = {
                position: new AMap.LngLat(121.510909, 31.233366), // 必须
                scale: 3580, // 非必须，默认1
                height: 1800,  // 非必须，默认0
                scene: 0, // 非必须，默认0
              };

              const paramDuck = {
                position: new AMap.LngLat(121.495000, 31.233366), // 必须
                scale: 800, // 非必须，默认1
                height: -100,  // 非必须，默认0
                scene: 0, // 非必须，默认0
              };

              const gltfObj = new AMap.GltfLoader();

              gltfObj.load(urlCity, function (gltfCity) {
                cityMeshes = gltfCity;
                gltfCity.setOption(paramCity);
                gltfCity.rotateX(90);
                gltfCity.rotateZ(120);
                that.object3Dlayer.add(gltfCity);
              });

              gltfObj.load(urlDuck, function (gltfDuck) {
                druckMeshes = gltfDuck;
                gltfDuck.setOption(paramDuck);
                gltfDuck.rotateX(90);
                gltfDuck.rotateZ(-20);
                that.object3Dlayer.add(gltfDuck);
              });

            });
          }, 1000)


          // that.map = new AMap.Map('container', {
          //   resizeEnable: true,   // 是否监控地图容器尺寸变化
          //   center: [116.397428, 39.90923],
          //   zoom: 5,
          //   viewMode: '3D',
          //   mapStyle: 'amap://styles/darkblue' // 设置地图的显示样式
          // })
        },
        (e) => {
          console.log('地图加载失败', e)
        }
      )
    }
  }
}
</script>
<style lang="less" scoped>
.test {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
</style>
