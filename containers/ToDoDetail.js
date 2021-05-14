import React from 'react';

const ToDoDetail = (todo, index) => {
  return (
    <>
      <h1>
        Task: {todo.task} - ID: {index}
      </h1>
      <h3>Details: </h3> <span>{todo.details}</span>
      <h3>Done: </h3> <span>{todo.done ? 'Done' : 'Not Done'}</span>
    </>
  );
};

ToDoDetail.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default ToDoDetail;
