import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBodyComponent } from './summary-body.component';

describe('EducationComponent', () => {
  let component: SummaryBodyComponent;
  let fixture: ComponentFixture<SummaryBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
