import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockBodyComponent } from './info-block-body.component';

describe('InfoBlockBodyComponent', () => {
  let component: InfoBlockBodyComponent;
  let fixture: ComponentFixture<InfoBlockBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBlockBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBlockBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
