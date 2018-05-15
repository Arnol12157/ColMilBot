import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalArmasPageComponent } from './portal-armas-page.component';

describe('PortalArmasPageComponent', () => {
  let component: PortalArmasPageComponent;
  let fixture: ComponentFixture<PortalArmasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalArmasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalArmasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
