import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: any;
  @Input()
  todos: Todo[];

  constructor() {
    this.todos = [];
    this.todoList = {};
  }

  ngOnInit() {
    this.todoList = {
      id: 1,
      title: 'ATP angular',
      user: {
        id: 2,
        url: 'http://localhost:8000/rest/users/2/',
        username: 'miquel',
        email: '',
        groups: []
      },
      todos: [
        {
          id: 5,
          title: 'Create and tests services',
          status: 'IN',
          created_at: '2019-09-29T15:31:16.106297Z',
          updated_at: '2019-09-29T15:31:16.106320Z'
        },
        {
          id: 4,
          title: 'Create angular project',
          status: 'AR',
          created_at: '2019-09-29T15:31:02.174625Z',
          updated_at: '2019-09-29T15:31:02.174649Z'
        },
        {
          id: 3,
          title: 'Deploy django rest',
          status: 'CO',
          created_at: '2019-09-29T15:30:47.751707Z',
          updated_at: '2019-09-29T15:30:47.751760Z'
        },
        {
          id: 2,
          title: 'learn how to unit testing angular',
          status: 'IN',
          created_at: '2019-09-29T15:25:11.189935Z',
          updated_at: '2019-09-29T15:25:11.189959Z'
        },
        {
          id: 1,
          title: 'learn angular',
          status: 'IN',
          created_at: '2019-09-29T15:24:49.340386Z',
          updated_at: '2019-09-29T15:24:49.340430Z'
        }
      ],
      created_at: '2019-09-29T15:24:31.197558Z',
      updated_at: '2019-09-29T15:24:31.197586Z'
    };
    this.todos = this.todoList.todos;

  }

  trackByTodoId(index, todo: Todo): number {
    return todo.id;
  }

}
