import React from "react";
import Layout from "../layout";
import "./assets/css/App.min.css";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  // state = { :  }
  render() {
    return <Layout/>;
  }
}

export default App;
// todo: preloader, bganimation
