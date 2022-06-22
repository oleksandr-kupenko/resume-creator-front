import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLeftMenuComponent } from './public-left-menu.component';

describe('PublicLeftMenuComponent', () => {
  let component: PublicLeftMenuComponent;
  let fixture: ComponentFixture<PublicLeftMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicLeftMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
