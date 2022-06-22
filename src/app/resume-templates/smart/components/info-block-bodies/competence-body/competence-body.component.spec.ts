import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceBodyComponent } from './competence-body.component';

describe('EducationComponent', () => {
  let component: CompetenceBodyComponent;
  let fixture: ComponentFixture<CompetenceBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetenceBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
