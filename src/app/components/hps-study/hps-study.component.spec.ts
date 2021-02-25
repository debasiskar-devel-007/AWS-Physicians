import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpsStudyComponent } from './hps-study.component';

describe('HpsStudyComponent', () => {
  let component: HpsStudyComponent;
  let fixture: ComponentFixture<HpsStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpsStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpsStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
