import { TestBed } from '@angular/core/testing';

import { NewstudentService } from './newstudent.service';

describe('LoginupService', () => {
  let service: NewstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
