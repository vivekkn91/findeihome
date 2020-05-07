import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheadComponent } from './mainhead.component';

describe('MainheadComponent', () => {
  let component: MainheadComponent;
  let fixture: ComponentFixture<MainheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
