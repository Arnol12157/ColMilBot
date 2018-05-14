import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartIntentsComponent } from './chart-intents.component';

describe('ChartIntentsComponent', () => {
  let component: ChartIntentsComponent;
  let fixture: ComponentFixture<ChartIntentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartIntentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartIntentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
