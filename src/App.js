import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoContainer from '../containers/ToDoContainer';
import ToDoDetail from '../containers/ToDoDetail';

import './style.css';

export default function App() {
  const [todos, setTodos] = useState([
    { task: 'yes', details: 'yessir', done: false }
  ]);

  const done = (index, event) => {
    const todosCopy = todos;
    todosCopy[index].done = event.target.checked;
    setTodos([...todosCopy]);
  };

  const deleteTodo = index => {
    const todosCopy = todos;
    todosCopy.splice(index, 1);
    setTodos([...todosCopy]);
  };

  const addTodo = todo => {
    const todosCopy = todos;
    todosCopy.push(todo);
    setTodos([...todosCopy]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ToDoContainer
            todos={todos}
            done={done}
            deleteTodo={deleteTodo}
            add={addTodo}
          />
        </Route>
        <Route exact path="/todo/:id">
          <ToDoDetail todo={todos} />
        </Route>
      </Switch>
    </Router>
  );
}
