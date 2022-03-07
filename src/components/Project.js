import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

function Project(props) {
  return (
    <ProjectWrapper>
      <Link to={`/${props.id}`}>
      <span>{props.name}</span>
      <i className="fa-solid fa-pen-to-square"></i>
      <i className="fa-solid fa-trash-can"></i>
      </Link>

    </ProjectWrapper>
  );
}

export default Project;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px;
  border-radius: 10px;
  background-color: papayawhip;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: palevioletred;
`;
