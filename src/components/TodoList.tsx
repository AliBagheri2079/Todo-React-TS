import React from "react";
import Todos from "./Todos";

interface TodoListProps {}

interface TodoListState {}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  // state = { :  }
  render() {
    return (
      <React.Fragment>
        <section className="row" style={{ marginBlock: ".4rem 0" }}>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s8">
                <input id="input_search" type="text" className="validate" />
                <label htmlFor="input_search">Search</label>
              </div>

              <div className="input-field col s5">
                <select
                  className="category"
                  id="selected-category"
                  name="selected-category"
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

        <Todos />
      </React.Fragment>
    );
  }
}

export default TodoList;
