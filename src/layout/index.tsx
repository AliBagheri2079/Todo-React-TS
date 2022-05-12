import * as React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

interface LayoutProps {}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {};
  render() {
    return (
      <div style={{ width: "clamp(18rem, 65vw, 62rem)",
        margin: "15px auto"}}>
        <TodoForm />
        <TodoList/>
      </div>
    );
  }
}

export default Layout;
