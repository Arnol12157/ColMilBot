import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChatbotComponent } from './gestion-chatbot.component';

describe('GestionChatbotComponent', () => {
  let component: GestionChatbotComponent;
  let fixture: ComponentFixture<GestionChatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionChatbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
