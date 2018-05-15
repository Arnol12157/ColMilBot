import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalContactosPageComponent } from './portal-contactos-page.component';

describe('PortalContactosPageComponent', () => {
  let component: PortalContactosPageComponent;
  let fixture: ComponentFixture<PortalContactosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalContactosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalContactosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
