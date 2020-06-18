import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareWalkThroughComponent } from './software-walk-through.component';

describe('SoftwareWalkThroughComponent', () => {
  let component: SoftwareWalkThroughComponent;
  let fixture: ComponentFixture<SoftwareWalkThroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareWalkThroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareWalkThroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
