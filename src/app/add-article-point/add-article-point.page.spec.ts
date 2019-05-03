import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticlePointPage } from './add-article-point.page';

describe('AddArticlePointPage', () => {
  let component: AddArticlePointPage;
  let fixture: ComponentFixture<AddArticlePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticlePointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticlePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
