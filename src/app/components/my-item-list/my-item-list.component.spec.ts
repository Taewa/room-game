import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyItemListComponent } from './my-item-list.component';

describe('MyItemListComponent', () => {
  let component: MyItemListComponent;
  let fixture: ComponentFixture<MyItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
