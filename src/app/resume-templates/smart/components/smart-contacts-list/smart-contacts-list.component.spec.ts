import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartContactsListComponent } from './smart-contacts-list.component';

describe('SmartTemplateMenuComponent', () => {
  let component: SmartContactsListComponent;
  let fixture: ComponentFixture<SmartContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartContactsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
