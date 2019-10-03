import { MomentInput } from 'moment';

export interface Todo {
  id: number;
  title: string;
  status: 'IN' | 'CO' | 'AR';
  created_at?: MomentInput;
  updated_at?: MomentInput;
}
