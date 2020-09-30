import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGatewayComponent } from './new-gateway.component';

describe('NewGatewayComponent', () => {
  let component: NewGatewayComponent;
  let fixture: ComponentFixture<NewGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
