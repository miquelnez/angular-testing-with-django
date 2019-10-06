import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    CommonsModule,
  ],
  exports: [TodoComponent]
})
export class TodoListsModule { }
