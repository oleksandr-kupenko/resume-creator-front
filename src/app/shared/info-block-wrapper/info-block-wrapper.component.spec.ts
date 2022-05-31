import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockWrapperComponent } from './info-block-wrapper.component';

describe('InfoBlockComponent', () => {
  let component: InfoBlockWrapperComponent;
  let fixture: ComponentFixture<InfoBlockWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBlockWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBlockWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
