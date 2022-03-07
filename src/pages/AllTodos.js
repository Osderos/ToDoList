import React, { useContext } from "react";
import { TodoTitle, ContentWrapper } from "../layout/Layout";
import { TodoContext } from "../utils/TodoContext";
import Todo from "../components/Todo";
import styled from "styled-components";

function AllTodos(props) {
  const { todoList, setTodoList } = useContext(TodoContext);

  const removeTodo = (param) =>
    setTodoList(todoList.filter((todo) => todo.identifier !== param));

  const editTodo = (id, newTodo) => {
    const editedTodos = todoList.map((todo) => {
      if (todo.identifier === id) {
        return newTodo ;
      }
      return todo;
    });
    setTodoList(editedTodos);
    console.log("TODOLIST",todoList);
  };

  const displayTodoList = todoList.map((todo) => (
    <Todo
      key={todo.identifier}
      id={todo.identifier}
      title={todo.title}
      priority={todo.priority}
      dueDate={todo.dueDate}
      isChecked={todo.isChecked}
      removeTodo={removeTodo}
      editTodo={editTodo}
    />
  ));

  return (
    <TodosContentWrapper>
      <TodoTitle>All Todos</TodoTitle>
      {displayTodoList}
    </TodosContentWrapper>
  );
}

export default AllTodos;

const TodosContentWrapper = styled(ContentWrapper)`
  flex-direction: column;
`;
