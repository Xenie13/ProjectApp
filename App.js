import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Graph from "./components/Graph";
import Compl from "./components/Compl";
import Transaction from "./components/Transaction";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Transaction />
        <Graph />
        <Form />
        <Compl />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Form} exact />
            <Route path="/graph" component={Graph} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
