import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotoBtnComponent } from './add-photo-btn.component';

describe('AddPhotoBtnComponent', () => {
  let component: AddPhotoBtnComponent;
  let fixture: ComponentFixture<AddPhotoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhotoBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
