import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSkillsBodyComponent } from './universal-skills-body.component';

describe('EducationComponent', () => {
  let component: UniversalSkillsBodyComponent;
  let fixture: ComponentFixture<UniversalSkillsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversalSkillsBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalSkillsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
