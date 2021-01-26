import { TestBed } from '@angular/core/testing';

import { MaestroService } from './maestro.service';

describe('MaestroService', () => {
  let service: MaestroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaestroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
