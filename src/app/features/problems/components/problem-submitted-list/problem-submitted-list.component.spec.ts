import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSubmittedListComponent } from './problem-submitted-list.component';

describe('ProblemSubmittedListComponent', () => {
  let component: ProblemSubmittedListComponent;
  let fixture: ComponentFixture<ProblemSubmittedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemSubmittedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSubmittedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
