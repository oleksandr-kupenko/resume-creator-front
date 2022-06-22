import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceBodyComponent } from './experience-body.component';

describe('EducationComponent', () => {
  let component: ExperienceBodyComponent;
  let fixture: ComponentFixture<ExperienceBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
