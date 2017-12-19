import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPlusComponent } from './btn-plus.component';

describe('BtnPlusComponent', () => {
  let component: BtnPlusComponent;
  let fixture: ComponentFixture<BtnPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
