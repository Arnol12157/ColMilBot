import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ResizeService} from '../../resize/resize.service';
import {CHART_TEXT_COLOR, MAT_DEEP_ORANGE, MAT_LIGHT_BLUE} from '../../utils/colors';

@Component({
  selector: 'app-multi-language-page',
  templateUrl: './multi-language-page.component.html',
  styleUrls: ['./multi-language-page.component.scss']
})
export class MultiLanguagePageComponent implements OnInit, OnDestroy {
  // Model for line chart
  lineChartOption;
  // Subscription for resizing events
  resizeSubscription;
  // Chart instances used for resizing after layout changes
  chartInstances = [];

  constructor(private translateService: TranslateService, private resizeService: ResizeService) {
    this.resizeSubscription = resizeService.resizeInformer$.subscribe(
      () => this.chartInstances.forEach((chart) => chart.resize())
    );
  }

  ngOnInit() {
    this.createLineChartModel();
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

  changeLanguage(event) {
    // Change selected language
    this.translateService.use(event.value);
    this.lineChartOption = this.createLineChartModel();
    this.createLineChartModel();
  }

  createLineChartModel() {
    this.translateService.get(['DAY', 'NIGHT', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY',
      'SUNDAY']).subscribe(translation => {
      this.lineChartOption = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [translation['DAY'], translation['NIGHT']],
          bottom: 0,
          textStyle: {
            color: CHART_TEXT_COLOR
          }
        },
        grid: {
          bottom: 80
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [translation['MONDAY'], translation['TUESDAY'], translation['WEDNESDAY'], translation['THURSDAY'],
            translation['FRIDAY'], translation['SATURDAY'], translation['SUNDAY']],
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
            name: translation['DAY'],
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
            name: translation['NIGHT'],
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
    });
  }

}
