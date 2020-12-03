import { TestBed } from '@angular/core/testing';

import { ProcessStepService } from './process-step.service';

describe('ProcessStepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessStepService = TestBed.get(ProcessStepService);
    expect(service).toBeTruthy();
  });
});
