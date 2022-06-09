import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesBodyComponent } from './certificates-body.component';

describe('EducationComponent', () => {
  let component: CertificatesBodyComponent;
  let fixture: ComponentFixture<CertificatesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificatesBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
