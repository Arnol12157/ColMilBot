import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNoticiaComponent } from './gestion-noticia.component';

describe('GestionNoticiaComponent', () => {
  let component: GestionNoticiaComponent;
  let fixture: ComponentFixture<GestionNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
