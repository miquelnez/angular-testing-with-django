import { MomentInput } from 'moment';

export interface Todo {
  id: number;
  title: string;
  status: TodoStatus;
  created_at?: MomentInput;
  updated_at?: MomentInput;
}

export type TodoStatus = 'IN' | 'CO' | 'AR';

export const emptyTodo: Todo = {
  id: 0,
  title: '',
  status: 'AR'
};
