import { TestBed } from '@angular/core/testing';

import { TeacherdetailService } from './teacherdetail.service';

describe('LoginupService', () => {
  let service: TeacherdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
