import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTmFlowDeviceComponent } from './the-tm-flow-device.component';

describe('TheTmFlowDeviceComponent', () => {
  let component: TheTmFlowDeviceComponent;
  let fixture: ComponentFixture<TheTmFlowDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTmFlowDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTmFlowDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
