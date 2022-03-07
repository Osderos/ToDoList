import styled from "styled-components";

export const ProjectButton = styled.button`
  background-color: #94d2bd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 300;
  padding: 5px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #99d98c;
    cursor: pointer;
  }
`;

export const AddTodoButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 35px;
  background-color: #cbb2fe;
  color: white;
  position: relative;
  transition: 0.3s;
  border-radius: 50% ;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top:550px;
  left:50px;
  

  &:hover {
    background-color: #757bc8;
    cursor: pointer;
  }
`;

export const PriorityButton = styled(ProjectButton)`
  background-color: ${props => props.priorityBgColor || 'gray'};
  color: ${props => props.priorityColor || 'white'};

  &:hover {
    background-color: ${props => props.priorityHoverBgColor || 'gray'};;
    cursor: pointer;
  }
`;
