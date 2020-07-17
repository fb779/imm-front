import { TestBed } from '@angular/core/testing';

import { AdminChecklistService } from './admin-checklist.service';

describe('AdminChecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminChecklistService = TestBed.get(AdminChecklistService);
    expect(service).toBeTruthy();
  });
});
