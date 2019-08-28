import { TestBed } from '@angular/core/testing';

import { AdminfacadeService } from './admin-facade.service';

describe('AdminfacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminfacadeService = TestBed.get(AdminfacadeService);
    expect(service).toBeTruthy();
  });
});
