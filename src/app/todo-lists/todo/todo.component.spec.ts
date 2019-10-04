import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { NO_ERRORS_SCHEMA, Component, ViewChild } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-test',
  template: `
    <app-todo
      [todo]="todo"
    ></app-todo>
  `,
})
class HostComponent {
  @ViewChild(TodoComponent, { static: true })
  child: TodoComponent;
  todo: Todo;
}

fdescribe('TodoComponent', () => {
  let component: TodoComponent;
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  // let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CommonsModule ],
      declarations: [ HostComponent, TodoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    component = hostComponent.child;

    hostComponent.todo = {
      id: 0,
      title: '',
      status: 'AR'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
