import { TestBed } from '@angular/core/testing';

import { ParqueService } from './parque.service';

describe('ParqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParqueService = TestBed.get(ParqueService);
    expect(service).toBeTruthy();
  });
});
