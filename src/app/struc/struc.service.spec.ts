import { TestBed } from '@angular/core/testing';

import { StrucService } from './struc.service';

describe('StrucService', () => {
  let service: StrucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
