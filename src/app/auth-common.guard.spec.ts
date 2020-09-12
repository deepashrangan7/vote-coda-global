import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCommonGuard } from './auth-common.guard';

describe('AuthCommonGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCommonGuard]
    });
  });

  it('should ...', inject([AuthCommonGuard], (guard: AuthCommonGuard) => {
    expect(guard).toBeTruthy();
  }));
});
