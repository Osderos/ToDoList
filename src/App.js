import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { ContentWrapper } from "./layout/Layout";
import Sidebar from "./components/Sidebar";
import AllTodos from "./pages/AllTodos";
import TodayTodos from "./pages/TodayTodos";
import WeekTodos from "./pages/WeekTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import Form from "./components/Form";
import { TodoContext } from "./utils/TodoContext";
import FormProject from "./components/FormProject";
import Project from "./components/Project";

function App() {
  const [isDisplayed, setDisplay] = useState(false);
  const [isDisplayedFormProject, setDisplayFormProject] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleDisplay = () => {
    setDisplay(!isDisplayed);
  };

  const handleDisplayFormProject = () => {
    setDisplayFormProject(!isDisplayedFormProject);
  };

  const addTodo = (param) => {
    setTodoList(todoList.concat(param));
    console.log(todoList);
  };

  const addProject = (param) => {
    setProjects(projects.concat(param));
  };

  const todoForm = isDisplayed ? (
    <Form addTodo={addTodo} handleDisplay={handleDisplay} />
  ) : null;

  const projectForm = isDisplayedFormProject ? (
    <FormProject
      addProject={addProject}
      handleDisplayFormProject={handleDisplayFormProject}
    />
  ) : null;

  const providerValue = {
    todoList,
    setTodoList,
  };

  return (
    <div className="App">
      <AddTodo handleDisplay={handleDisplay} />
      {todoForm}
      {projectForm}
      <Header />
      <Router>
        <ContentWrapper>
          <Sidebar handleDisplayFormProject={handleDisplayFormProject} projects={projects}/>
          <TodoContext.Provider value={providerValue}>
            <Routes>
              <Route path="/" exact element={<AllTodos />} />
              <Route path="/today" exact element={<TodayTodos />} />
              <Route path="/week" exact element={<WeekTodos />} />
              <Route path='/:id' element={<Project/>} />
            </Routes>
          </TodoContext.Provider>
        </ContentWrapper>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
