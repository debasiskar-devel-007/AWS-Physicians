import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitingfunnelComponent } from './recruitingfunnel.component';

describe('RecruitingfunnelComponent', () => {
  let component: RecruitingfunnelComponent;
  let fixture: ComponentFixture<RecruitingfunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitingfunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitingfunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
