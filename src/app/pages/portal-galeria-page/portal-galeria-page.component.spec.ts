import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalGaleriaPageComponent } from './portal-galeria-page.component';

describe('PortalGaleriaPageComponent', () => {
  let component: PortalGaleriaPageComponent;
  let fixture: ComponentFixture<PortalGaleriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalGaleriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalGaleriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
