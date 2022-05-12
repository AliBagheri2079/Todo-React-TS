import * as React from "react";
import "./css/index.min.css";

interface LayoutProps {}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  // state = { :  }
  render() {
    return (
      <div className="app">
        <h3>helo</h3>
      </div>
    );
  }
}

export default Layout;
