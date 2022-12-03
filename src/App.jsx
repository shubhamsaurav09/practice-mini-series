import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import PropsAndComponents from "./pages/PropsAndComponents/PropsAndComponents";
// import SearchFilter from "./pages/SearchFilter";
// import CounterApp from "./pages/CounterApp";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <PropsAndComponents />
    </div>
  );
}

export default App;
