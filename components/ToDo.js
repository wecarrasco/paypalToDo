import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToDo = ({ todo, index, done, deleteTodo }) => {
  const doneStyle = {
    textDecoration: 'line-through'
  };

  const todoStyle = {
    border: '1px solid black',
    margin: '5px 0px'
  };

  return (
    <div style={todoStyle}>
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

ToDo.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  done: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default ToDo;
