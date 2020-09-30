import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeripheralsComponent } from './view-peripherals.component';

describe('ViewPeripheralsComponent', () => {
  let component: ViewPeripheralsComponent;
  let fixture: ComponentFixture<ViewPeripheralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPeripheralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPeripheralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
