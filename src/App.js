import React from "react";
import {Router, Switch, Route} from 'react-router-dom'
import "./style.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ToDoList/>
        </Route>
        <Route path="/todo/:id">
          <ToDoDetails/>
        </Route>
      </Switch>
    </Router>
  );
}
