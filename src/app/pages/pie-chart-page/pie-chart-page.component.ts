import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {CHART_TEXT_COLOR, MAT_LIGHT_BLUE} from '../../utils/colors';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-pie-chart-page',
  templateUrl: './pie-chart-page.component.html',
  styleUrls: ['./pie-chart-page.component.scss'],
  animations: [routerAnimation]
})
export class PieChartPageComponent implements OnInit, OnDestroy {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Chart instances used for resizing after layout changes
  chartInstances = [];
  // Subscription for resizing events
  resizeSubscription;
  // Model for customized pie chart
  customizedOption = {
    title: {
      text: 'Some title',
      left: 'center',
      top: 20,
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: 'Series 1',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          {value: 335, name: 'First'},
          {value: 310, name: 'Second'},
          {value: 274, name: 'Third'},
          {value: 235, name: 'Fourth'},
          {value: 400, name: 'Fifth'}
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: 'angle',
        label: {
          normal: {
            textStyle: {
              color: CHART_TEXT_COLOR
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: CHART_TEXT_COLOR
            },
            smooth: 0,
            length: 15,
            length2: 25
          }
        },
        itemStyle: {
          normal: {
            color: MAT_LIGHT_BLUE._500,
            shadowBlur: 100,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: 200
      }
    ]
  };
  // Model for doughnut chart
  doughnutOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      textStyle: {
        color: CHART_TEXT_COLOR
      }
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
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
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
  // Model for nested pie chart
  nestedOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'],
      textStyle: {
        color: CHART_TEXT_COLOR
      }
    },
    series: [
      {
        name: 'Some contactData',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
          normal: {
            position: 'inner'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {value: 335, name: 'Data 1', selected: true, color: MAT_LIGHT_BLUE._300},
          {value: 679, name: 'Data 2', color: MAT_LIGHT_BLUE._400},
          {value: 1548, name: 'Data 3', color: MAT_LIGHT_BLUE._500}
        ],
        itemStyle: {
          normal: {
            color: (val) => val.data.color,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      },
      {
        name: 'Some contactData',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [
          {value: 335, name: 'Data 1', color: MAT_LIGHT_BLUE._300},
          {value: 310, name: 'Data 4', color: MAT_LIGHT_BLUE._600},
          {value: 234, name: 'Data 5', color: MAT_LIGHT_BLUE._700},
          {value: 135, name: 'Data 6', color: MAT_LIGHT_BLUE._800},
          {value: 1048, name: 'Data 7', color: MAT_LIGHT_BLUE._900},
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

}
