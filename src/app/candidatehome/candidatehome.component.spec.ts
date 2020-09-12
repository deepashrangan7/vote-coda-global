import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatehomeComponent } from './candidatehome.component';

describe('CandidatehomeComponent', () => {
  let component: CandidatehomeComponent;
  let fixture: ComponentFixture<CandidatehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
