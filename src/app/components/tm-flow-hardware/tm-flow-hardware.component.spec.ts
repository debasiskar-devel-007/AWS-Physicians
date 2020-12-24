import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmFlowHardwareComponent } from './tm-flow-hardware.component';

describe('TmFlowHardwareComponent', () => {
  let component: TmFlowHardwareComponent;
  let fixture: ComponentFixture<TmFlowHardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmFlowHardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmFlowHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
