import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalIndexPageComponent } from './portal-index-page.component';

describe('PortalIndexPageComponent', () => {
  let component: PortalIndexPageComponent;
  let fixture: ComponentFixture<PortalIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
