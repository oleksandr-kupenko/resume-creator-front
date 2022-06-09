import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDropdownComponent } from './icons-dropdown.component';

describe('IconsDropdownComponent', () => {
  let component: IconsDropdownComponent;
  let fixture: ComponentFixture<IconsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
