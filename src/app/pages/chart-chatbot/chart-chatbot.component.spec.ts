import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChatbotComponent } from './chart-chatbot.component';

describe('ChartChatbotComponent', () => {
  let component: ChartChatbotComponent;
  let fixture: ComponentFixture<ChartChatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartChatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
