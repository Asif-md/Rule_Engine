import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import history from "./utils/history";
import CreateRule from "./components/CreateRule";
import Main from "./components/Main";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={CreateRule} />

            <Route exact path="/questions" component={Main} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
