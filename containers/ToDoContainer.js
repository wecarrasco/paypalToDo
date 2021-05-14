import React from 'react';
import ToDoList from '../components/ToDoList';
import AddToDo from '../components/AddToDo';
import PropTypes from 'prop-types';

const ToDoContainer = ({ todos, done, deleteTodo, add }) => {
  return (
    <>
      <h1>To Do List - PayPal</h1>
      <AddToDo add={add} />
      <ToDoList todos={todos} done={done} deleteTodo={deleteTodo} />
    </>
  );
};

ToDoContainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ),
  done: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired
};

export default ToDoContainer;
