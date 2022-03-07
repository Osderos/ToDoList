import React, { useState } from "react";
import { FormWrapper, Label, Input } from "../layout/Form/Form.styles";
import { PriorityButton } from "../layout/Button/Button";
import uniqid from "uniqid";

function FormProject(props) {
  const [project, setProject] = useState({
    name: "",
    id: uniqid(),
  });

  const handleInput = (e) => {
    setProject({ ...project, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProject(project);
    props.handleDisplayFormProject();
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <Label>Project Name</Label>
        <Input
          type="text"
          name="projectName"
          value={project.name}
          onChange={handleInput}
        />
      </div>
      <div>
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
          onClick={props.handleDisplayFormProject}
        >
          Cancel
        </PriorityButton>
      </div>
    </FormWrapper>
  );
}

export default FormProject;
