import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFooterPageComponent } from './portal-footer-page.component';

describe('PortalFooterPageComponent', () => {
  let component: PortalFooterPageComponent;
  let fixture: ComponentFixture<PortalFooterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalFooterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFooterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
