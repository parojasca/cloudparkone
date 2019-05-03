import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapArticlePointPage } from './map-article-point.page';

describe('MapArticlePointPage', () => {
  let component: MapArticlePointPage;
  let fixture: ComponentFixture<MapArticlePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapArticlePointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapArticlePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
