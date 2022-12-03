import React, { useState } from "react";
import "./LoginForm.css";

const details = {
  email: "admin@admin",
  password: "admin",
};

export default function LoginForm() {
  const [login, setLogin] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.email === details.email && login.password === details.password)
      alert(`Welcome, ${login.name}`);
    else {
      alert("Wrong credentials entered");
    }
  };

  return (
    <div className="container">
      <div className="login-inner-container">
        <form onSubmit={handleSubmit}>
          <div className="form-inner">
            <h2>Login Form</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setLogin({ ...login, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                required
              />
            </div>
            <input id="loginButton" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}