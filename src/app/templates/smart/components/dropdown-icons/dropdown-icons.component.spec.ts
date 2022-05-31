import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIconsComponent } from './dropdown-icons.component';

describe('IconsDropdownComponent', () => {
  let component: DropdownIconsComponent;
  let fixture: ComponentFixture<DropdownIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownIconsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
