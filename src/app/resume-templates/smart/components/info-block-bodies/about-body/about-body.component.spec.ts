import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBodyComponent } from './about-body.component';

describe('EducationComponent', () => {
  let component: AboutBodyComponent;
  let fixture: ComponentFixture<AboutBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
