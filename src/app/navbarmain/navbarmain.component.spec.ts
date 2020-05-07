import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmainComponent } from './navbarmain.component';

describe('NavbarmainComponent', () => {
  let component: NavbarmainComponent;
  let fixture: ComponentFixture<NavbarmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
