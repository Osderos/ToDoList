import styled from "styled-components";

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
  font-family: "Roboto";
`;

const TodoTitle = styled(Title)`
  margin: 25px;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const ContentWrapper = styled.section`
  padding: 1em;
  background: white;
  display: flex;
  justify-content: ${(props) => (props.centered ? "center" : "flex-start")};
  align-items: ${(props) => (props.centered ? "center" : "left")};
  border-bottom: 2px solid papayawhip;
  gap: 15px;
  padding: 0px;
`;

const SidebarWrapper = styled(ContentWrapper)`
  flex-direction: column;
  background-color: papayawhip;
  padding: 15px;
  width: 25%;
  height: 100vh;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: papayawhip;
  padding: 15px;
  position: fixed;
  z-index: 1;
  margin-top: 250px;
  margin-left: 50%;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  gap: 5px;
`;

export { Title, TodoTitle, Logo, ContentWrapper, SidebarWrapper, FormWrapper };
