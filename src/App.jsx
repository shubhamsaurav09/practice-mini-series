import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import PropsAndComponents from "./pages/PropsAndComponents";
import FetchAPI from "./pages/FetchAPI";
// import CounterApp from "./pages/CounterApp";
// import SearchFilter from "./pages/SearchFilter";

function App() {
  return (
    <div className="App">
      <LoginForm />
      <PropsAndComponents />
      <FetchAPI />
      {/* <SearchFilter /> */}
      {/* <CounterApp /> */}
    </div>
  );
}

export default App;
