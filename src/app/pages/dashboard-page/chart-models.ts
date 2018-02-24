import {MAT_LIGHT_BLUE} from '../../utils/colors';
declare let echarts: any;
// Area chart model
export let AREA_CHART_OPTION = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#d9dadc',
        type: 'dashed',
        shadowOffsetX: '-1',
        shadowColor: 'rgba(217, 218, 220, 0.5)'
      }
    }
  },
  grid: {
    top: '10%',
    left: '0',
    right: '20px',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 15,
      textStyle: {
        color: '#a6a5a6',
        fontFamily: 'Roboto',
        fontSize: 14
      }
    },
    data: ['Jan', '', 'Mar', '', 'May', '', 'Jul', '', 'Sep', '', 'Nov', '']
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 24,
      textStyle: {
        color: '#a6a5a6',
        fontFamily: 'Roboto',
        fontSize: 14
      }
    },
    splitLine: {
      lineStyle: {
        color: '#212121',
        opacity: 0.2
      }
    }
  }],
  series: [{
    name: 'Business A',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 3,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 0
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#e44b8e'
        }, {
          offset: 1,
          color: '#f6c1d8'
        }], false),
        opacity: 0.79
      }
    },
    itemStyle: {
      normal: {
        color: '#ffffff',
        borderColor: '#e44b8e',
        borderWidth: 2

      }
    },
    data: [50, 103, 75, 60, 98, 175, 88, 110, 121, 103, 75, 55]
  }, {
    name: 'Business B',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 3,
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 0
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#3e9ace'
        }, {
          offset: 1,
          color: '#9dcce6'
        }], false),
        opacity: 0.73
      }
    },
    itemStyle: {
      normal: {
        color: '#ffffff',
        borderColor: '#3e9ace',
        borderWidth: 2
      }
    },
    data: [25, 75, 158, 75, 50, 91, 30, 138, 81, 67, 110, 98]
  }]
};
// Area chart with line model
export let AREA_CHART_WITH_LINE_OPTION = {
  grid: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    containLabel: false
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    offset: -55,
    z: 10,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(33, 33, 33, 0.67)',
        fontFamily: 'Roboto',
        fontSize: 14
      }
    },
    data: ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', '']
  }],
  yAxis: [{
    type: 'value',
    show: false,
  }],
  series: [{
    name: 'Business A',
    type: 'line',
    showSymbol: false,
    lineStyle: {
      normal: {
        width: 4,
        color: '#3e9ace'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#7cbbdd'
        }, {
          offset: 1,
          color: '#aad3e9'
        }], false),
        opacity: 1
      }
    },
    data: [65, 85, 83, 105, 100, 130, 120]
  }]
};
// Model for doughnut chart
export let DOUGHNUT_OPTION = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}'
  },
  series: [
    {
      name: 'Some contactData',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: true,
          formatter: '{d}%',
          textStyle: {
            color: 'rgba(33, 33, 33, 0.87)',
            fontWeight: '300',
            fontFamily: 'Roboto',
            fontSize: '30'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: 'First', color: MAT_LIGHT_BLUE._300},
        {value: 310, name: 'Second', color: MAT_LIGHT_BLUE._400},
        {value: 234, name: 'Third', color: MAT_LIGHT_BLUE._500},
        {value: 135, name: 'Fourth', color: MAT_LIGHT_BLUE._600},
        {value: 1548, name: 'Fifth', color: MAT_LIGHT_BLUE._700}
      ],
      itemStyle: {
        normal: {
          color: (val) => val.data.color,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
    }
  ]
};
// Model for linecharts
export let INIDICATOR_ITEMS = [
  {
    title: 'Clicks',
    value: '25%',
    increase: true,
    option: {
      grid: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        containLabel: false
      },
      xAxis: [{
        type: 'category',
        show: false,
      }],
      yAxis: [{
        type: 'value',
        min: 80,
        max: 120,
        show: false
      }],
      series: [{
        name: 'Business A',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2.5,
            color: '#03a9f4',
            shadowBlur: 7,
            shadowColor: 'rgba(38, 183, 239, 0.5)',
            shadowOffsetY: 12
          }
        },
        data: [100, 120, 95, 115, 100 ]
      }]
    }
  },
  {
    title: 'Progress',
    value: '10%',
    increase: true,
    option: {
      grid: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        containLabel: false
      },
      xAxis: [{
        type: 'category',
        show: false,
      }],
      yAxis: [{
        type: 'value',
        min: 80,
        max: 120,
        show: false
      }],
      series: [{
        name: 'Business A',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2.5,
            color: '#f05a9d',
            shadowBlur: 7,
            shadowColor: 'rgba(240, 90, 157, 0.5)',
            shadowOffsetY: 12
          }
        },
        data: [100, 105, 118, 97, 120 ]
      }]
    }
  },
  {
    title: 'Likes',
    value: '15%',
    increase: false,
    option: {
      grid: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        containLabel: false
      },
      xAxis: [{
        type: 'category',
        show: false,
      }],
      yAxis: [{
        type: 'value',
        min: 80,
        max: 120,
        show: false,
      }],
      series: [{
        name: 'Business A',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2.5,
            color: '#7dbbdd',
            shadowBlur: 7,
            shadowColor: 'rgba(124, 186, 221, 0.5)',
            shadowOffsetY: 12
          }
        },
        data: [100, 115, 99, 102, 107 ]
      }]
    }
  },
  {
    title: 'Sales',
    value: '22%',
    increase: true,
    option: {
      grid: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        containLabel: false
      },
      xAxis: [{
        type: 'category',
        show: false,
      }],
      yAxis: [{
        type: 'value',
        min: 80,
        max: 120,
        show: false,
      }],
      series: [{
        name: 'Business A',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2.5,
            color: '#ff561f',
            shadowBlur: 7,
            shadowColor: 'rgba(255, 102, 51, 0.5)',
            shadowOffsetY: 12
          }
        },
        data: [100, 106, 102, 112, 104 ]
      }]
    }
  }
]
