import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapArticlePolygonPage } from './map-article-polygon.page';

describe('MapArticlePolygonPage', () => {
  let component: MapArticlePolygonPage;
  let fixture: ComponentFixture<MapArticlePolygonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapArticlePolygonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapArticlePolygonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
