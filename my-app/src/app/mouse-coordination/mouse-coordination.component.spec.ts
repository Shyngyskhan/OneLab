import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseCoordinationComponent } from './mouse-coordination.component';

describe('MouseCoordinationComponent', () => {
  let component: MouseCoordinationComponent;
  let fixture: ComponentFixture<MouseCoordinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseCoordinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
