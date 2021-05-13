import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

const ToDoList = ({ todos, done, deleteTodo }) => {
  return (
    <>
      {todos.length === 0 && <h1>There are no todos :(</h1>}
      {todos.length > 0 && (
        <>
          {todos.map((todo, index) => {
            return (
              <ToDo
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

ToDoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(ToDo)),
  done: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default ToDoList;
