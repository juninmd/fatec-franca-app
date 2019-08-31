import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesPage } from './avaliacoes.page';

describe('AvaliacoesPage', () => {
  let component: AvaliacoesPage;
  let fixture: ComponentFixture<AvaliacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliacoesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
