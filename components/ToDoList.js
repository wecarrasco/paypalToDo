import React from 'react';
import PropTypes from 'prop-types'
import ToDo from './ToDo'

const ToDoList = ({todos, done, deleteTodo}) => {
  return(

  )
}

ToDoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(ToDo)),
  done: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default ToDoList;