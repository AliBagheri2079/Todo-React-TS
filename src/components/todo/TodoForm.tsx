import React from "react";
import { TodoState } from "../interface/TodosInterface";
import "./assets/css/TodoForm.min.css";

interface TodoFormProps {
  setTodoItems: (isCreated: boolean, todos: Array<TodoState>) => void;
}

class TodoForm extends React.PureComponent<TodoFormProps, TodoState> {
  state = {
    id: 1,
    title: "",
    status: "",
    details: "",
  };

  private handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    this.handleNewTodo();

    this.setState({
      title: "",
      status: "",
      details: "",
    });
  };

  private handleNewTodo = (): void => {
    const { title, status, details } = this.state;

    const today = new Date();
    const createdTime = `${today.getFullYear()}/${
      today.getMonth() + 1
    }/${today.getDate()} - ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    const todoItem = {
      id: new Date().getTime(),
      createdTime,
      title,
      status,
      details,
    };

    this.props.setTodoItems(true, [todoItem]);
  };

  render() {
    // console.warn("todo form component");
    const { title, status, details } = this.state;

    return (
      <>
        <header>
          <form
            className="col"
            id="form"
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <fieldset className="todo-form">
              <legend>Create Todo</legend>

              <div className="row">
                <div className="input-field col s8">
                  <input
                    type="text"
                    name="input-title"
                    id="input-title"
                    className="validate"
                    minLength={3}
                    maxLength={20}
                    required
                    value={title}
                    onChange={(e) =>
                      this.setState({
                        title: e.target.value,
                      })
                    }
                    autoFocus
                  />
                  <label htmlFor="input-title">Title</label>
                </div>

                <div className="input-field col s8">
                  <select
                    className="todo-status"
                    id="input-status"
                    name="input-status"
                    value={status}
                    onChange={(e) =>
                      this.setState({
                        status: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="" disabled>
                      Choose your Status
                    </option>
                    <option value="Uncomplete">Uncomplete</option>
                    <option value="Doing">Doing</option>
                    <option value="Complete">Complete</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">mode_edit</i>

                  <textarea
                    id="input-details"
                    name="input-details"
                    className="materialize-textarea"
                    maxLength={250}
                    minLength={25}
                    required
                    value={details}
                    onChange={(e) =>
                      this.setState({
                        details: e.target.value,
                      })
                    }
                  ></textarea>
                  <label htmlFor="input-details">Details</label>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div className="col">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </header>
      </>
    );
  }
}

export default TodoForm;
