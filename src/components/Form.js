import React, { useState } from "react";
import uniqid from "uniqid";
import { FormWrapper } from "../layout/Layout";
import { PriorityButton } from "../layout/Button/Button";
import styled from "styled-components";

function Form(props) {
  const [todo, setTodo] = useState({
    title: "",
    priority: "",
    identifier: uniqid(),
    dueDate: new Date(),
    isChecked: false,
  });

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleInputButtonChanges = (e) => {
    const { name, innerText } = e.target;
    setTodo({ ...todo, [name]: innerText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo({
      title: "",
      priority: "",
      identifier: uniqid(),
      dueDate: new Date(),
      isChecked: false,
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Label>New Task</Label>
        <Input
          type="text"
          value={todo.title}
          placeholder="Add a task"
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
          value={todo.dueDate}
          min={new Date().toLocaleDateString()}
        />
      </div>
      <ButtonsGroup>
        <PriorityButton
          priorityBgColor="#e63946"
          priorityColor="white"
          priorityHoverBgColor="#9b2226"
          value={todo.priority}
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
          value={todo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type='button'
        >
          Normal
        </PriorityButton>
        <PriorityButton
          priorityBgColor="#90be6d"
          priorityColor="black"
          priorityHoverBgColor="#43aa8b"
          value={todo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type='button'
        >
          Low
        </PriorityButton>
        <PriorityButton
          priorityBgColor="#b7b7a4"
          priorityColor="black"
          priorityHoverBgColor="#a5a58d"
          value={todo.priority}
          onClick={handleInputButtonChanges}
          name="priority"
          type='button'
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
          type='button'
          onClick={props.handleDisplay}
        >
          Cancel
        </PriorityButton>
      </ButtonsGroup>
    </FormWrapper>
  );
}

export default Form;

const ButtonsGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: #cfbaf0;
  border: none;
  border-radius: 3px;
`;

const Label = styled.label`
  color: "palevioletred";
`;
