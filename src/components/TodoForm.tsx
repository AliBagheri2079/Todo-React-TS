import React from "react";
import "./assets/css/TodoForm.min.css";

interface TodoFormProps {}

interface TodoFormState {}

class TodoForm extends React.Component<TodoFormProps, TodoFormState> {
  // state = { :  }
  render() {
    return (
      <header>
        <form className="col" onSubmit={(e) => e.preventDefault()}>
          <fieldset className="todo-form">
            <legend>Create Todo</legend>

            <div className="row">
              <div className="input-field col s8">
                <input
                  id="input_text"
                  type="text"
                  className="validate"
                  maxLength={20}
                />
                <label htmlFor="input_text">Title</label>
              </div>

              <div className="input-field col s8">
                <select
                  className="todo-status"
                  id="input_status"
                  name="input_status"
                >
                  <option defaultValue="" disabled>
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
                  className="materialize-textarea"
                  id="textarea2"
                  name="textarea2"
                  maxLength={250}
                ></textarea>
                <label htmlFor="textarea2">Details</label>
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
    );
  }
}

export default TodoForm;
