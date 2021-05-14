import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ToDoDetail = ({ todo }) => {
  const { id } = useParams();
  const history = useHistory();

  const [currentTodo, setTodo] = useState({});

  useEffect(() => {
    setTodo(todo[id]);
  });

  return (
    <>
      <h1>
        Task: {currentTodo.task} - ID: {id}
      </h1>
      <h3>Details: </h3> <span>{currentTodo.details}</span>
      <h3>Done: </h3> <span>{currentTodo.done ? 'Done' : 'Not Done'}</span>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go back
      </button>
    </>
  );
};

ToDoDetail.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  )
};

export default ToDoDetail;
