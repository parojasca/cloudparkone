import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgergarArticleLinePage } from './agergar-article-line.page';

describe('AgergarArticleLinePage', () => {
  let component: AgergarArticleLinePage;
  let fixture: ComponentFixture<AgergarArticleLinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgergarArticleLinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgergarArticleLinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
