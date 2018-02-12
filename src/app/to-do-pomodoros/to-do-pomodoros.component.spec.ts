import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoPomodorosComponent } from './to-do-pomodoros.component';

describe('ToDoPomodorosComponent', () => {
  let component: ToDoPomodorosComponent;
  let fixture: ComponentFixture<ToDoPomodorosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoPomodorosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoPomodorosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
