import styled from "styled-components";

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


export {FormWrapper, Input, Label}