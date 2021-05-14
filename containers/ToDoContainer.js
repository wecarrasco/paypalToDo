import React from 'react';
import ToDoList from '../components/ToDoList';
import AddToDo from '../components/AddToDo';

const ToDoContainer = ({ todos, done, deleteTodo, add }) => {
  return (
    <>
      <h1>To Do List - PayPal</h1>
      <AddToDo add={add} />
      <ToDoList todos={todos} done={done} deleteTodo={deleteTodo} />
    </>
  );
};

export default ToDoContainer;
