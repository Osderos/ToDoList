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

function App() {
  const [isDisplayed, setDisplay] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const handleDisplay = () => {
    setDisplay(!isDisplayed);
  };

  const addTodo = (param) => {
    setTodoList(todoList.concat(param));
    console.log(todoList);
  };

  const todoForm = isDisplayed ? (
    <Form addTodo={addTodo} handleDisplay={handleDisplay} />
  ) : null;

  const providerValue = {
    todoList, setTodoList
  };

  return (
    <div className="App">
      <AddTodo handleDisplay={handleDisplay} />
      {todoForm}
      <Header />
      <Router>
        <ContentWrapper>
          <Sidebar />
          <TodoContext.Provider value={providerValue}>
            <Routes>
              <Route path="/" exact element={<AllTodos />} />
              <Route path="/today" exact element={<TodayTodos />} />
              <Route path="/week" exact element={<WeekTodos />} />
            </Routes>
          </TodoContext.Provider>
        </ContentWrapper>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
