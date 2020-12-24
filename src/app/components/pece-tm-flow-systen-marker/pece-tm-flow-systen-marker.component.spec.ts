import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeceTmFlowSystenMarkerComponent } from './pece-tm-flow-systen-marker.component';

describe('PeceTmFlowSystenMarkerComponent', () => {
  let component: PeceTmFlowSystenMarkerComponent;
  let fixture: ComponentFixture<PeceTmFlowSystenMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeceTmFlowSystenMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeceTmFlowSystenMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
