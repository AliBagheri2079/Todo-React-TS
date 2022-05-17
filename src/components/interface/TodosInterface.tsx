export interface TodoState {
  id: number;
  createdTime?: string;
  title: string;
  status: string;
  details: string;
}

export interface TodoProp {
  todoItems: Array<TodoState>;
  setTodoItems: (isCreated: boolean, todos: Array<TodoState>) => void;
}
