import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockHeadComponent } from './info-block-head.component';

describe('InfoBlockHeadComponent', () => {
  let component: InfoBlockHeadComponent;
  let fixture: ComponentFixture<InfoBlockHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBlockHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBlockHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
