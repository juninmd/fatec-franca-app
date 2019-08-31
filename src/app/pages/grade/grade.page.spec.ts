import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePage } from './grade.page';

describe('GradePage', () => {
  let component: GradePage;
  let fixture: ComponentFixture<GradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
