import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalColminotasPageComponent } from './portal-colminotas-page.component';

describe('PortalColminotasPageComponent', () => {
  let component: PortalColminotasPageComponent;
  let fixture: ComponentFixture<PortalColminotasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalColminotasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalColminotasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
