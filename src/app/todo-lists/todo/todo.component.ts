import { Component, Input, OnChanges } from '@angular/core';
import { Todo, emptyTodo } from '../models';
import { isNil, isEmpty } from 'lodash';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnChanges {

  @Input()
  todo: Todo;

  constructor() {
    this.todo = emptyTodo;
  }

  ngOnChanges(): void {
    if ( isNil(this.todo) || isEmpty(this.todo) ) {
      this.todo = emptyTodo;
    }
  }

  handleChanged(ev) {

  }

  handleClicked(ev) {

  }
}
