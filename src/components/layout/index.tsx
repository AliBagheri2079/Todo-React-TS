import * as React from "react";
import { TodoState } from "../@types/Todo";
import TodoForm from "../todo/TodoForm";
import TodoList from "../todo/TodoList";

interface LayoutProps {}

interface LayoutState {
  todoItems: Array<TodoState>;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  readonly state = {
    todoItems: [
      {
        id: new Date().getTime(),
        createdTime: "2022/01/01 - 12:00:01",
        title: "Todo",
        status: "Complete",
        details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        possimus itaque pariatur. Nisi quia animi eum quas, deleniti totam
        possimus tempora ut veritatis commodi asperiores numquam dignissimos
        sunt, soluta voluptate?`,
      },
    ],
  };

  private setTodoItems = (
    isCreated: boolean,
    todos: Array<TodoState>
  ): void => {
    if (isCreated) {
      this.setState({ todoItems: [...this.state.todoItems, ...todos] });
      return;
    } else this.setState({ todoItems: [...todos] });
  };

  render() {
    return (
      <div style={{ width: "clamp(18rem, 65vw, 62rem)", margin: "15px auto" }}>
        <TodoForm setTodoItems={this.setTodoItems} />
        <TodoList
          todoItems={this.state.todoItems}
          setTodoItems={this.setTodoItems}
        />
      </div>
    );
  }
}

export default Layout;
