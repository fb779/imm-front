import { TestBed } from '@angular/core/testing';

import { AdminVisaCategoriesService } from './admin-visa-categories.service';

describe('AdminVisaCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminVisaCategoriesService = TestBed.get(AdminVisaCategoriesService);
    expect(service).toBeTruthy();
  });
});
