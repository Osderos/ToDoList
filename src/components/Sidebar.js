import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarWrapper} from '../layout/Layout'
import Project from './Project'

function Sidebar() {
  return (
    <SidebarWrapper>
      <ListItem>
        <StyledLink to="/"><i className="fa-solid fa-inbox"></i>All Todos</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/today"><i className="fa-solid fa-calendar-days"></i>Today Todos</StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="/week"><i className="fa-solid fa-calendar-week"></i>Week Todos</StyledLink>
      </ListItem>
      <Project/>
    </SidebarWrapper>
  );
}

export default Sidebar;

const StyledLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300&display=swap");
  font-family: "Lato", sans-serif;
  text-decoration: none;
  color: palevioletred;
  display: flex;
  gap: 5px;

`;

const ListItem = styled.li`
  list-style-type: none;
`;


