import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {CHART_TEXT_COLOR, MAT_DEEP_ORANGE, MAT_LIGHT_BLUE} from '../../utils/colors';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-bar-chart-page',
  templateUrl: './bar-chart-page.component.html',
  styleUrls: ['./bar-chart-page.component.scss'],
  animations: [routerAnimation]
})
export class BarChartPageComponent implements OnInit, OnDestroy {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Chart instances used for resizing after layout changes
  chartInstances = [];
  // Subscription for resizing events
  resizeSubscription;
  // Chart models
  animatedBarOption = {
    legend: {
      data: ['Bar', 'Bar2'],
      align: 'left',
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack', 'tiled'],
          title: {
            stack: 'Stack',
            tiled: 'Tiled',
            textStyle: {
              color: CHART_TEXT_COLOR
            }
          }
        },
        saveAsImage: {
          pixelRatio: 2,
          title: 'Save',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    tooltip: {},
    xAxis: {
      data: this.getAnimatedBarXAxisData(),
      silent: false,
      splitLine: {
        show: false
      },
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
    series: [{
      name: 'Bar',
      type: 'bar',
      stack: 'firstStack',
      data: this.getAnimatedBarData(),
      animationDelay: function (idx) {
        return idx * 10;
      },
      itemStyle: {
        normal: {
          color: MAT_LIGHT_BLUE._500
        }
      },
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
    }, {
      name: 'Bar2',
      type: 'bar',
      stack: 'firstStack',
      data: this.getAnimatedBarData(),
      animationDelay: function (idx) {
        return idx * 10 + 100;
      },
      itemStyle: {
        normal: {
          color: MAT_DEEP_ORANGE._500
        }
      }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5;
    }
  };
  simpleBarChartOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Bar 1', 'Bar 2'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    toolbox: {
      show: true,
      feature: {
        magicType: {
          show: true,
          type: ['line', 'bar'],
          title: {
            line: 'Line',
            bar: 'Bar',
            textStyle: {
              color: CHART_TEXT_COLOR
            }
          }
        },
        saveAsImage: {
          show: true,
          title: 'Save',
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
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
        name: 'Bar 1',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
            color: MAT_LIGHT_BLUE._500
          }
        }
      },
      {
        name: 'Bar 2',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
          data: [
            {name: 'Mark 1', value: 182.2, xAxis: 7, yAxis: 183},
            {name: 'Mark 2', value: 2.3, xAxis: 11, yAxis: 3}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        },
        itemStyle: {
          normal: {
            color: MAT_DEEP_ORANGE._500
          }
        }
      }
    ]
  };
  horizontalBarChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Bar 1', 'Bar 2', 'Bar 3'],
      bottom: 0,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
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
    yAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: ['1', '2', '3', '4'],
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
        name: 'Bar 1',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        itemStyle: {
          normal: {
            color: MAT_DEEP_ORANGE._500
          }
        },
        data: [200, 170, 240, 244]
      },
      {
        name: 'Bar 3',
        type: 'bar',
        stack: 'Stack',
        label: {
          normal: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE._500
          }
        },
        data: [320, 302, 341, 374]
      },
      {
        name: 'Bar 2',
        type: 'bar',
        stack: 'Stack',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE.A700
          }
        },
        data: [-120, -132, -101, -134]
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
   * Mock method for data generation
   * @returns {Array} data for charts
   */
  getAnimatedBarData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    return data;
  }

  /**
   * Mock method for data generation
   * @returns {Array} data for charts
   */
  getAnimatedBarXAxisData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push('Label ' + i);
    }
    return data;
  }


}
