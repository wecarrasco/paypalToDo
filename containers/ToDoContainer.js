import React, { useState } from 'react';
import ToDoList from '../components/ToDoList';

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);

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

  return <ToDoList todos={todos} done={done} deleteTodo={deleteTodo} />;
};

export default ToDoContainer;
