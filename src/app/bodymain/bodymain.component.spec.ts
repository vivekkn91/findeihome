import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodymainComponent } from './bodymain.component';

describe('BodymainComponent', () => {
  let component: BodymainComponent;
  let fixture: ComponentFixture<BodymainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodymainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
