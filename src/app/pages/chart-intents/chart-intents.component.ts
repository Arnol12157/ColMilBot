import {AfterViewInit, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {CHART_TEXT_COLOR, MAT_DEEP_ORANGE, MAT_LIGHT_BLUE} from '../../utils/colors';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
export interface Intent { intent_name: string; numero_peticiones: number; preguntas: any[];}

@Component({
  selector: 'app-chart-intents',
  templateUrl: './chart-intents.component.html',
  styleUrls: ['./chart-intents.component.scss'],
    animations: [routerAnimation]
})
export class ChartIntentsComponent implements OnInit, OnDestroy {

    // Add router animation
    @HostBinding('@routerAnimation') routerAnimation = true;
    // Chart instances used for resizing after layout changes
    chartInstances = [];
    // Subscription for resizing events
    resizeSubscription;

   lineOption: any;
    data: any[] = [];

    private intentCollection: AngularFirestoreCollection<Intent>;
    itemsIntent: Observable<Intent[]>;

    constructor(private resizeService: ResizeService, private readonly afs: AngularFirestore) {
        this.resizeSubscription = resizeService.resizeInformer$.subscribe(
            () => this.chartInstances.forEach((chart) => chart.resize())
        );
        this.intentCollection = afs.collection('intents', ref => ref.orderBy("numero_peticiones", "desc").limit(6));
        this.itemsIntent = this.intentCollection.valueChanges();
        this.itemsIntent.subscribe((aIntents) => {
            var max=Math.max(aIntents[0].numero_peticiones,
                            aIntents[1].numero_peticiones,
                            aIntents[2].numero_peticiones,
                            aIntents[3].numero_peticiones,
                            aIntents[4].numero_peticiones,
                            aIntents[5].numero_peticiones);
            // Radar chart with lines model
            this.lineOption = {
                tooltip: {},
                legend: {
                    data: ['Intents mas consultados'],
                    textStyle: {
                        color: CHART_TEXT_COLOR
                    }
                },
                radar: {
                    indicator: [
                        { name: aIntents[0].intent_name, max: max},
                        { name: aIntents[1].intent_name, max: max},
                        { name: aIntents[2].intent_name, max: max},
                        { name: aIntents[3].intent_name, max: max},
                        { name: aIntents[4].intent_name, max: max},
                        { name: aIntents[5].intent_name, max: max},
                    ]
                },
                series: [{
                    name: 'Intents mas consultados',
                    type: 'radar',
                    data : [
                        {
                            value : [aIntents[0].numero_peticiones, aIntents[1].numero_peticiones, aIntents[2].numero_peticiones, aIntents[3].numero_peticiones, aIntents[4].numero_peticiones, aIntents[5].numero_peticiones],
                            name : 'Intents mas consultados',
                            color: MAT_LIGHT_BLUE._500
                        },
                    ],
                    itemStyle: {
                        normal: {
                            color: (val) => val.data.color
                        }
                    },
                }]
            };
        });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.resizeSubscription.unsubscribe();
    }

}
