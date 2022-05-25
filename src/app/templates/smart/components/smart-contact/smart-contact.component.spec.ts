import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContactComponent } from './smart-contact.component';

describe('IconsDropdownComponent', () => {
  let component: SmartContactComponent;
  let fixture: ComponentFixture<SmartContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartContactComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
