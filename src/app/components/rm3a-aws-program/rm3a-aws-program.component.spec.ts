import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rm3aAwsProgramComponent } from './rm3a-aws-program.component';

describe('Rm3aAwsProgramComponent', () => {
  let component: Rm3aAwsProgramComponent;
  let fixture: ComponentFixture<Rm3aAwsProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rm3aAwsProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rm3aAwsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
