import React from "react";
import { TodoProp } from "../@types/Todo";
import "./assets/css/Todos.min.css";

interface TodosState {}

class Todos extends React.PureComponent<TodoProp, TodosState> {
  private handleDeleteTodo = (id: number): void => {
    const filteredTodos = this.props.todoItems.filter((todo) => todo.id !== id);
    this.props.setTodoItems(false, filteredTodos);
  };

  render() {
    // console.warn("todo component");
    return (
      <section style={{ paddingBottom: "2rem" }}>
        {this.props.todoItems.map((item) => (
          <details className="todo-item" key={item.id}>
            <summary className="todo-item__header">
              <div className="left">
                <div>
                  <h4 className="truncate">{item.title.toLowerCase()}</h4>
                </div>
              </div>

              <div className="right">
                <div>
                  <time dateTime="2018-07-07">{item.createdTime}</time>
                </div>
                <div>
                  <span
                    className="new badge"
                    data-badge-caption={item.status}
                  ></span>
                </div>
                <div>
                  <button
                    className="btn-floating waves-effect waves-light red"
                    onClick={() => this.handleDeleteTodo(item.id)}
                  >
                    <i className="material-icons">delete_sweep</i>
                  </button>
                </div>
              </div>
            </summary>

            <p className="todo-item__description">{item.details}</p>
          </details>
        ))}
      </section>
    );
  }
}

export default Todos;
