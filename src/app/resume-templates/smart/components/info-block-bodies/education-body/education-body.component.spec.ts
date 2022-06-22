import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationBodyComponent } from './education-body.component';

describe('EducationComponent', () => {
  let component: EducationBodyComponent;
  let fixture: ComponentFixture<EducationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
