import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParquePage } from './parque.page';

describe('ParquePage', () => {
  let component: ParquePage;
  let fixture: ComponentFixture<ParquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
