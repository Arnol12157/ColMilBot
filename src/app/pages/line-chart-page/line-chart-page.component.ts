import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {CHART_TEXT_COLOR, MAT_DEEP_ORANGE, MAT_LIGHT_BLUE} from '../../utils/colors';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';
declare var echarts: any;

@Component({
  selector: 'app-line-chart-page',
  templateUrl: './line-chart-page.component.html',
  styleUrls: ['./line-chart-page.component.scss'],
  animations: [routerAnimation]
})
export class LineChartPageComponent implements OnInit, OnDestroy {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Chart instances used for resizing after layout changes
  chartInstances = [];
  // Subscription for resizing events
  resizeSubscription;
  // Stacked aria chart model
  stackedAreaOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: 'Save',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '80',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh'],
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    ],
    series: [
      {
        name: 'Series 4',
        type: 'line',
        stack: 'stack1',
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A700
          }
        },
        lineStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A700
          }
        },
        areaStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A700
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Series 3',
        type: 'line',
        stack: 'stack1',
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A400
          }
        },
        lineStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A400
          }
        },
        areaStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A400
          }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Series 2',
        type: 'line',
        stack: 'stack1',
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A200
          }
        },
        lineStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A200
          }
        },
        areaStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A200
          }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Series 1',
        type: 'line',
        stack: 'stack1',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A100
          }
        },
        lineStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A100
          }
        },
        areaStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A100
          }
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  // Aria chart model
  areaOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    toolbox: {
      feature: {
        restore: {
          title: 'Restore',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        saveAsImage: {
          title: 'Save',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.generateAreaDate(),
      axisLabel: {
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      axisLabel: {
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,' +
      '8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: [
      {
        name: 'Series 1',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE._500
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: MAT_LIGHT_BLUE._200
            }, {
              offset: 1,
              color: MAT_LIGHT_BLUE._900
            }])
          }
        },
        lineStyle: {
          normal: {
            color: MAT_LIGHT_BLUE._500
          }
        },
        data: this.generateAreaData()
      }
    ]
  };
  // Model fir multiple axes chart
  multipleAxesOption = {
    color: [MAT_LIGHT_BLUE._500, MAT_DEEP_ORANGE._500],
    toolbox: {
      feature: {
        saveAsImage: {
          title: 'Save',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['2015 year', '2016 year'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      top: 70,
      bottom: 80
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: MAT_DEEP_ORANGE._500
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return 'year  ' + params.value + '：' + params.seriesData[0].data;
            }
          }
        },
        data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10',
          '2016-11', '2016-12'],
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: MAT_LIGHT_BLUE._500
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return 'year  ' + params.value + '：' + params.seriesData[0].data;
            }
          }
        },
        data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10',
          '2015-11', '2015-12']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisTicks: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        axisLine: {
          lineStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    ],
    series: [
      {
        name: '2015 year',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name: '2016 year',
        type: 'line',
        smooth: true,
        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
      }
    ]
  };
  // Model for simple line chart
  lineChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Day', 'Night'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      bottom: 80
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: 'Save',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      axisLabel: {
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
        textStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisTicks: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      },
      axisLine: {
        lineStyle: {
          color: CHART_TEXT_COLOR
        }
      }
    },
    series: [
      {
        name: 'Day',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [
            {type: 'max', name: 'Max'},
            {type: 'min', name: 'Min'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: 'Average'}
          ]
        },
        itemStyle: {
          normal: {
            color: MAT_DEEP_ORANGE._500
          }
        },
        lineStyle: {
          normal: {
            color: MAT_DEEP_ORANGE._500
          }
        }
      },
      {
        name: 'Night',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [
            {name: '', value: -2, xAxis: 1, yAxis: -1.5}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: ''},
            [{
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            }, {
              symbol: 'circle',
              label: {
                normal: {
                  position: 'start',
                  formatter: ''
                }
              },
              type: 'max',
              name: ''
            }]
          ]
        },
        lineStyle: {
          normal: {
            color: MAT_LIGHT_BLUE._500
          }
        },
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE._500
          }
        }
      }
    ]
  };

  constructor(private resizeService: ResizeService) {
    this.resizeSubscription = resizeService.resizeInformer$.subscribe(
      () => this.chartInstances.forEach((chart) => chart.resize())
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

  /**
   * Mock method for chart data generation
   * @returns {number[]}
   */
  generateAreaData() {
    const data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
  }

  /**
   * Mock method for chart data generation
   * @returns {Array}
   */
  generateAreaDate() {
    let base = +new Date(1968, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    const date = [];
    for (let i = 1; i < 20000; i++) {
      const now = new Date(base += oneDay);
      date.push([now.getDate(), now.getMonth() + 1, now.getFullYear()].join('/'));
    }
    return date;
  }


}
