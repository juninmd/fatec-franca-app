import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmCursoPage } from './em-curso.page';

describe('EmCursoPage', () => {
  let component: EmCursoPage;
  let fixture: ComponentFixture<EmCursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmCursoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
