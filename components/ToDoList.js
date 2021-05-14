import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({ todos, done, deleteTodo }) => {
  return (
    <>
      {todos.length === 0 && <h1>There are no todos :( Please add a task</h1>}
      {todos.length > 0 && (
        <>
          {todos.map((todo, index) => {
            return (
              <ToDo
                key={index}
                todo={todo}
                index={index}
                done={done}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </>
      )}
    </>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ),
  done: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default ToDoList;
