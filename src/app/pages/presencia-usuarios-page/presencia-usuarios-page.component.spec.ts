import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciaUsuariosPageComponent } from './presencia-usuarios-page.component';

describe('PresenciaUsuariosPageComponent', () => {
  let component: PresenciaUsuariosPageComponent;
  let fixture: ComponentFixture<PresenciaUsuariosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaUsuariosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenciaUsuariosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
