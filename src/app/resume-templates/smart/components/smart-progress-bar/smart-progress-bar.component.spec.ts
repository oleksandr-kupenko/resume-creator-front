import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProgressBarComponent } from './smart-progress-bar.component';

describe('SmartProgressBarComponent', () => {
  let component: SmartProgressBarComponent;
  let fixture: ComponentFixture<SmartProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
