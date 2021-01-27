import echarts from 'echarts'
// import skin from '../assets/styles/chartsSkin'
export default {
  comparisonHistogram (canvasStyles) {
    const canvasChart = echarts.init(document.getElementById(canvasStyles.dom))
    window.onresize = () => {
      return (() => {
        canvasChart.resize()
      })()
    }
    const option = {
      title: {
        text: '',
        subtext: ''
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          var res = canvasStyles.xAxis + '：' + canvasStyles.roadX[params[0].dataIndex] + '<br/>'
          for (var i = 0; i < params.length; i++) {
            res += '<p>' + params[i].seriesName + ':' + params[i].value + '</p>'
          }
          return res
        }
      },
      legend: {
        x: 'right', // 'center' | 'left' | {number},
        y: 'top', // 'center' | 'bottom' | {number}
        data: canvasStyles.ydataname
      },
      barGap: '0',
      grid: {
        show: true,
        top: canvasStyles.margin[0],
        left: canvasStyles.margin[3],
        right: canvasStyles.margin[1],
        bottom: canvasStyles.margin[2],
        borderWidth: 0
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          name: canvasStyles.xAxis,
          data: canvasStyles.xdata,
          axisLabel: {
            interval: 0,
            rotate: -40,
            textStyle: {
              color: '#000'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: canvasStyles.yAxis
        }
      ],
      series: [
        {
          name: canvasStyles.ydataname[0],
          type: 'bar',
          itemStyle: {
            normal: {
              color: canvasStyles.colorStyle[0]
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: canvasStyles.ydata[0]
          // markPoint: {
          //   data: [
          //     {type: 'max', name: '最大值'},
          //     {type: 'min', name: '最小值'}
          //   ]
          // }
          // markLine : {
          //  data : [
          //    {type : 'average', name: '平均值'}
          //  ]
          // }
        },
        {
          name: canvasStyles.ydataname[1],
          type: 'bar',
          itemStyle: {
            normal: {
              color: canvasStyles.colorStyle[1]
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: canvasStyles.ydata[1]
          // markPoint: {
          //   data: [
          //     {type: 'max', name: '最大值'},
          //     {type: 'min', name: '最小值'}
          //   ]
          // }
          // markLine : {
          //  data : [
          //    {type : 'average', name : '平均值'}
          //  ]
          // }
        }
      ]
    }
    canvasChart.setOption(option)
  }
}
