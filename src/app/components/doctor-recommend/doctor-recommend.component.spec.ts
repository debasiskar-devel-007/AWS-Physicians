import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRecommendComponent } from './doctor-recommend.component';

describe('DoctorRecommendComponent', () => {
  let component: DoctorRecommendComponent;
  let fixture: ComponentFixture<DoctorRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
