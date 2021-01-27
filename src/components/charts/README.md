
```html
<template>
  <div class="canvas" id="histogram"></div>
</template>
```
```javascript
import comparisonHistogram from '@/common/components/charts/comparisonHistogram/index'

export default {
  data() {
    return {
      xdata: ['a', 'b', 'c', 'd'],
      data: [120, 200, 150, 80],
      teamX: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      teamData: [
        [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      ]
    }
  },
  methods: {
  },
  mounted () {
    const dutyType = {
      dom: 'histogram', // dom  id
      ydata: this.teamData, // 数据信息
      xdata: this.teamX,
      ydataname: ['举报量', '查处量'],
      xAxis: '道路',
      yAxis: '起',
      colorStyle: ['#F1606F', '#4AC0EB'],
      margin: ['30', '6%', '', '6%']
    }
    comparisonHistogram.comparisonHistogram(dutyType)
  }
}
```
```css
<style>
  .canvas {
    width: xxx;
    height: xxx;
  }
</style>
```