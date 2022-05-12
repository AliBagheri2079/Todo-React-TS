import React from "react";

import Layout from "../layout";
import "./assets/css/App.min.css";

interface AppProps {}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {
    showContent: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showContent: true });
    }, 3500);
  }

  render() {
    return (
      <>
        {/* preloader */}
        {!this.state.showContent && (
        <div className="preloader" id="preloader">
          <h1>
            <strong>
              Do<span className="hide-header">n't</span>
            </strong>
            <strong>
              <span className="hide-header">Qu</span>it
            </strong>
          </h1>
        </div>
        )}

        {/* content */}
        {this.state.showContent && (
          <main className="content content--animate">
            <Layout />
          </main>
        )}
      </>
    );
  }
}

export default App;
// todo: preloader, bganimation
