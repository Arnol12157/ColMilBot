import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalHeaderPageComponent } from './portal-header-page.component';

describe('PortalHeaderPageComponent', () => {
  let component: PortalHeaderPageComponent;
  let fixture: ComponentFixture<PortalHeaderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalHeaderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
