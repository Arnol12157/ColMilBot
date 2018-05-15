import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPostulacionPageComponent } from './portal-postulacion-page.component';

describe('PortalPostulacionPageComponent', () => {
  let component: PortalPostulacionPageComponent;
  let fixture: ComponentFixture<PortalPostulacionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalPostulacionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalPostulacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
