import React, { useState } from 'react';

const AddToDo = ({ add }) => {
  const [newTodo, setNewTodo] = useState({
    done: false,
    task: '',
    details: ''
  });

  const setTask = event => {
    setNewTodo({ ...newTodo, task: event.target.value });
  };

  const setDetails = event => {
    setNewTodo({ ...newTodo, details: event.target.value });
  };

  const addTask = () => {
    add(newTodo);
    setNewTodo({ done: false, task: '', details: '' });
  };

  return (
    <>
      <label style={{ display: 'block', marginTop: '5px' }}>
        Task:{' '}
        <input
          type="text"
          value={newTodo.task}
          onChange={event => setTask(event)}
        />
      </label>
      <label style={{ display: 'block', marginTop: '5px' }}>
        Details:{' '}
        <input
          type="text"
          value={newTodo.details}
          onChange={event => setDetails(event)}
        />
      </label>
      <button
        onClick={() => addTask()}
        style={{ display: 'block', marginTop: '5px' }}
      >
        Add
      </button>
    </>
  );
};

export default AddToDo;
