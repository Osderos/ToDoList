import React from "react";
import { format, parseISO } from "date-fns";
import styled from "styled-components";

function Todo(props) {
  const formatDate = format(parseISO(props.dueDate), "dd-MMM-yyyy");

  const convertPriority = () => {
    if (props.priority === "High") {
      return "red";
    } else if (props.priority === "Normal") {
      return "orange";
    } else if (props.priority === "Low") {
      return "green";
    } else {
      return "gray";
    }
  };
  return (
    <TodoWrapper>
      <PriorityIndicator priorityColor={() => convertPriority()} />
      <span>{props.title}</span>
      <span>{formatDate}</span>
      <i className="fa-solid fa-pen-to-square"></i>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => props.removeTodo(props.id)}
      ></i>
    </TodoWrapper>
  );
}

export default Todo;

const PriorityIndicator = styled.div`
  border-radius: 50%;
  padding: 10px;
  background-color: ${(props) => props.priorityColor};
`;
const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px;
  border-radius: 10px;
  background-color: papayawhip;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: palevioletred;
`;
