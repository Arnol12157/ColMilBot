import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalColmilPageComponent } from './portal-colmil-page.component';

describe('PortalColmilPageComponent', () => {
  let component: PortalColmilPageComponent;
  let fixture: ComponentFixture<PortalColmilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalColmilPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalColmilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
