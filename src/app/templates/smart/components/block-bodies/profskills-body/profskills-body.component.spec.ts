import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfskillsBodyComponent } from './profskills-body.component';

describe('EducationComponent', () => {
  let component: ProfskillsBodyComponent;
  let fixture: ComponentFixture<ProfskillsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfskillsBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfskillsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
