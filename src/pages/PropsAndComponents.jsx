import React from "react";
import "./PropsAndComponents.css";
import Button from "../components/Button";

const animals = [
  "SearchAndFilter",
  "LoginForm",
  "CounterApp",
  "PropsAndComponents",
  "FetchAPI",
  "Accordion",
  "Stepper",
];

export default function PropsAndComponents() {
  return (
    <div className="container">
      <div className="inner-container">
        {animals.map((elem) => (
          <Button name={elem} />
        ))}
      </div>
    </div>
  );
}
