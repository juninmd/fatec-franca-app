import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasPage } from './aulas.page';

describe('AulasPage', () => {
  let component: AulasPage;
  let fixture: ComponentFixture<AulasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
