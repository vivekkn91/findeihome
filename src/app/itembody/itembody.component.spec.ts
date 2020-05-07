import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembodyComponent } from './itembody.component';

describe('ItembodyComponent', () => {
  let component: ItembodyComponent;
  let fixture: ComponentFixture<ItembodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItembodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItembodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
