import React from "react";
import { TodoProp } from "../@types/Todo";
import Todos from "./Todos";

interface TodoListState {}

class TodoList extends React.PureComponent<TodoProp, TodoListState> {
  // private handleSearchTodos = (event: { target: { value: string } }): void => {
  //   const todos = [...this.props.todoItems];
  //   const searchedTodos = todos.filter((todo) =>
  //     todo.title.includes(event.target.value)
  //   );
  //   this.props.setTodoItems(true, searchedTodos);
  // };

  private handleSortTodos = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const sortValue = event.target.value;
    const todos = [...this.props.todoItems];

    if (sortValue === "Earliest") {
      let sortedbyEarliest = todos.sort((a, b) => b.id - a.id);
      this.props.setTodoItems(false, sortedbyEarliest);
    } else {
      let sortedbyLatest = todos.sort((a, b) => a.id - b.id);
      this.props.setTodoItems(false, sortedbyLatest);
    }
  };

  render() {
    // console.warn("todo list component");

    return (
      <React.Fragment>
        <section className="row" style={{ marginBlock: ".4em -.5em" }}>
          <form className="col s12" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="input-field col s8">
                <input
                  id="input_search"
                  type="text"
                  className="validate"
                  // onChange={this.handleSearchTodos}
                />
                <label htmlFor="input_search">Search</label>
              </div>

              <div className="input-field col s4">
                <select
                  className="category"
                  id="selected-category"
                  name="selected-category"
                  onChange={this.handleSortTodos}
                >
                  <option defaultValue="" disabled>
                    Choose your Category
                  </option>
                  <option value="Latest">Latest</option>
                  <option value="Earliest">Earliest</option>
                </select>
              </div>
            </div>
          </form>
        </section>

        <Todos
          todoItems={this.props.todoItems}
          setTodoItems={this.props.setTodoItems}
        />
      </React.Fragment>
    );
  }
}

export default TodoList;
