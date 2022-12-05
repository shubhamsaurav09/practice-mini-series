import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import PropsAndComponents from "./pages/PropsAndComponents";
import SearchFilter from "./pages/SearchFilter";
import CounterApp from "./pages/CounterApp";
import FetchAPI from "./pages/FetchAPI";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PropsAndComponents />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/searchfilter" element={<SearchFilter />} />
          <Route path="/counterapp" element={<CounterApp />} />
          <Route path="/fetchapi" element={<FetchAPI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
