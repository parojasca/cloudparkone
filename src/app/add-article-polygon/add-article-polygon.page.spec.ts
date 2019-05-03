import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticlePolygonPage } from './add-article-polygon.page';

describe('AddArticlePolygonPage', () => {
  let component: AddArticlePolygonPage;
  let fixture: ComponentFixture<AddArticlePolygonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticlePolygonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticlePolygonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
