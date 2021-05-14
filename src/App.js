import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoContainer from '../containers/ToDoContainer';

import './style.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ToDoContainer />
        </Route>
        {/*<Route path="/todo/:id">
          <ToDoDetails/>
        </Route>*/}
      </Switch>
    </Router>
  );
}
