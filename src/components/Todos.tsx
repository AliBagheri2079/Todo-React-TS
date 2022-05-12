import React from "react";
import "./assets/css/Todos.min.css";

interface TodosProps {}

interface TodosState {}

class Todos extends React.Component<TodosProps, TodosState> {
  // state = { :  }

  render() {
    return (
      <section>
        <details className="todo-item">
          <summary className="todo-item__header">
            <div className="left">
              <div>
                <h4 className="truncate">Title</h4>
              </div>
            </div>

            <div className="right">
              <div>
                <time dateTime="2018-07-07">2018-07-07</time>
              </div>
              <div>
                <span className="new badge" data-badge-caption="status"></span>
              </div>
              <div>
                <button className="btn-floating waves-effect waves-light red">
                  <i className="material-icons">delete_sweep</i>
                </button>
              </div>
            </div>
          </summary>

          <p className="todo-item__description">
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>

        <details className="todo-item">
          <summary className="todo-item__header">
            <div className="left">
              <div>
                <h4 className="truncate">Title</h4>
              </div>
            </div>

            <div className="right">
              <div>
                <time dateTime="2018-07-07">2018-07-07</time>
              </div>
              <div>
                <span className="new badge" data-badge-caption="status"></span>
              </div>
              <div>
                <button className="btn-floating waves-effect waves-light red">
                  <i className="material-icons">delete_sweep</i>
                </button>
              </div>
            </div>
          </summary>

          <p className="todo-item__description">
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>       
      </section>
    );
  }
}

export default Todos;
