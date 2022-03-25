import { TestBed } from '@angular/core/testing';

import { ApplicaserviceService } from './applicaservice.service';

describe('ApplicaserviceService', () => {
  let service: ApplicaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
