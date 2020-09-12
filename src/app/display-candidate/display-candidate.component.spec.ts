import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCandidateComponent } from './display-candidate.component';

describe('DisplayCandidateComponent', () => {
  let component: DisplayCandidateComponent;
  let fixture: ComponentFixture<DisplayCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
