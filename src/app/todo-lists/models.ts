export interface Todo {
  id: number;
  title: string;
  status: 'IN' | 'CO' | 'AR';
  created_at: string;
  updated_at: string;
}
