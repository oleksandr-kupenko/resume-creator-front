import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTemplateHeaderComponent } from './smart-template-header.component';

describe('SmartTemplateHeaderComponent', () => {
  let component: SmartTemplateHeaderComponent;
  let fixture: ComponentFixture<SmartTemplateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartTemplateHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTemplateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
