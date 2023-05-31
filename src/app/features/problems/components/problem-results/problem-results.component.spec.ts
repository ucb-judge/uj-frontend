import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemResultsComponent } from './problem-results.component';

describe('ProblemResultsComponent', () => {
  let component: ProblemResultsComponent;
  let fixture: ComponentFixture<ProblemResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
