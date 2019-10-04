import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() {
    this.todo = {
      id: 0,
      title: '',
      status: 'AR'
    };
  }

  ngOnInit() {
  }

  handleChanged(ev) {

  }

  handleClicked(ev) {

  }
}
