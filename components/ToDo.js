import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToDo = ({ todo, index, done, deleteTodo }) => {
  const doneStyle = {
    textDecoration: 'line-through'
  };

  return (
    <div style={{ border: '1px solid black' }}>
      <p style={todo.done ? doneStyle : {}}>
        Task: <Link to={`/todo/${index}`}>{todo.task}</Link>
      </p>
      <label>
        {todo.done ? 'Task Completed' : 'Mark as Complete'}
        <input
          type="checkbox"
          checked={todo.done}
          onChange={event => done(index, event)}
        />
      </label>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};
