import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeceVirtualPlatformComponent } from './pece-virtual-platform.component';

describe('PeceVirtualPlatformComponent', () => {
  let component: PeceVirtualPlatformComponent;
  let fixture: ComponentFixture<PeceVirtualPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeceVirtualPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeceVirtualPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
