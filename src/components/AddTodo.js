import React from 'react'
import {AddTodoButton} from '../layout/Button/Button'

function AddTodo(props) {
  return (
    <AddTodoButton onClick={props.handleDisplay}>+</AddTodoButton>
  )
}

export default AddTodo