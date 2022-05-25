import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A4WrapperComponent } from './a4-wrapper.component';

describe('A4WrapperComponent', () => {
  let component: A4WrapperComponent;
  let fixture: ComponentFixture<A4WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A4WrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A4WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
