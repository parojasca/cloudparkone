import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapArticleLinePage } from './map-article-line.page';

describe('MapArticleLinePage', () => {
  let component: MapArticleLinePage;
  let fixture: ComponentFixture<MapArticleLinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapArticleLinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapArticleLinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
