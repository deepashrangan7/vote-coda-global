import { TestBed, async, inject } from '@angular/core/testing';

import { AuthCandidateGuard } from './auth-candidate.guard';

describe('AuthCandidateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCandidateGuard]
    });
  });

  it('should ...', inject([AuthCandidateGuard], (guard: AuthCandidateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
