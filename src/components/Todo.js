import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import styled from "styled-components";
import { EditWrapper } from "../layout/Layout";
import { Label,Input } from "../layout/Form/Form.styles";
import { PriorityButton } from "../layout/Button/Button.styles";

function Todo(props) {
  const formatDate = format(parseISO(props.dueDate), "dd-MMM-yyyy");
  const [isEditing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: props.title,
    priority: props.priority,
    identifier: props.id,
    dueDate: props.dueDate,
    isChecked: props.isChecked,
  });

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const handleInputButtonChanges = (e) => {
    const { name, innerText } = e.target;
    setEditedTodo({ ...editedTodo, [name]: innerText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTodo(props.id, editedTodo);
    
    setEditing(false);
    console.log("EDITED TODOLIST",editedTodo)
  };

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

  const editingTemplate = (
    <EditWrapper onSubmit={handleSubmit}>
      <div key={props.id}>
        <Label>New Task</Label>
        <Input
          type="text"
          value={editedTodo.title}
          placeholder={props.title}
          name="title"
          onChange={handleInputChanges}
        />
      </div>
      <div>
        <Label>Due Date</Label>
        <Input
          type="date"
          name="dueDate"
          onChange={handleInputChanges}
          value={editedTodo.dueDate}
          min={new Date().toLocaleDateString()}
        />
      </div>
      <ButtonsGroup>
        <PriorityButton
          priorityBgColor="#e63946"
          priorityColor="white"
          priorityHoverBgColor="#9b2226"
          value={editedTodo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type="button"
        >
          High
        </PriorityButton>
        <PriorityButton
          priorityBgColor="#ee9b00"
          priorityColor="black"
          priorityHoverBgColor="#ffb703"
          value={editedTodo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type="button"
        >
          Normal
        </PriorityButton>
        <PriorityButton
          priorityBgColor="#90be6d"
          priorityColor="black"
          priorityHoverBgColor="#43aa8b"
          value={editedTodo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type="button"
        >
          Low
        </PriorityButton>
        <PriorityButton
          priorityBgColor="#b7b7a4"
          priorityColor="black"
          priorityHoverBgColor="#a5a58d"
          value={editedTodo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type="button"
        >
          None
        </PriorityButton>
      </ButtonsGroup>
      <ButtonsGroup>
        <PriorityButton
          priorityBgColor="#95d5b2"
          priorityColor="black"
          priorityHoverBgColor="#52b788"
          type="submit"
        >
          Add
        </PriorityButton>
        <PriorityButton
          priorityBgColor="#b7b7a4"
          priorityColor="black"
          priorityHoverBgColor="#6b705c"
          type="button"
          onClick={() => setEditing(false)}
        >
          Cancel
        </PriorityButton>
      </ButtonsGroup>
    </EditWrapper>
  );

  const viewTemplate = (
    <TodoWrapper>
      <PriorityIndicator priorityColor={() => convertPriority()} />
      <span>{props.title}</span>
      <span>{formatDate}</span>
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => setEditing(true)}
      ></i>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => props.removeTodo(props.id)}
      ></i>
    </TodoWrapper>
  );

  return <div>{isEditing ? editingTemplate : viewTemplate}</div>;
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

const ButtonsGroup = styled.div`
  display: flex;
  gap: 5px;
`;
