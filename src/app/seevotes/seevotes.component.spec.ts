import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeevotesComponent } from './seevotes.component';

describe('SeevotesComponent', () => {
  let component: SeevotesComponent;
  let fixture: ComponentFixture<SeevotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeevotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeevotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
