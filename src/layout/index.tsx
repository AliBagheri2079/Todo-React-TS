import * as React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

interface LayoutProps {}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TodoForm />
        <TodoList/>
      </React.Fragment>
    );
  }
}

export default Layout;
