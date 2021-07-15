import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsFormComponent } from './todo-details-form.component';

describe('TodoDetailsFormComponent', () => {
  let component: TodoDetailsFormComponent;
  let fixture: ComponentFixture<TodoDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
