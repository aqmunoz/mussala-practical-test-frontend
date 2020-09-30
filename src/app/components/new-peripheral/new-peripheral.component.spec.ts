import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeripheralComponent } from './new-peripheral.component';

describe('NewPeripheralComponent', () => {
  let component: NewPeripheralComponent;
  let fixture: ComponentFixture<NewPeripheralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeripheralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeripheralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
