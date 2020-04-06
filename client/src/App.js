import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Creation from "./pages/Creation";
import CharacterSelection from "./pages/CharacterSelection";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/creation" component={Creation} />
          <Route
            exact
            path="/characterselection"
            component={CharacterSelection}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
