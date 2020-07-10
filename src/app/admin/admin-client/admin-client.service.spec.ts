import { TestBed } from '@angular/core/testing';

import { AdminClientService } from './admin-client.service';

describe('AdminClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminClientService = TestBed.get(AdminClientService);
    expect(service).toBeTruthy();
  });
});
