import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
      </Switch>
    );
  }
}

export default withRouter(App);
