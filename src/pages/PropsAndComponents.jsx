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
    <div className="props_container">
      <div className="props_inner-container">
        <h2>Props and Components</h2>
        {animals.map((elem) => (
          <Button name={elem} />
        ))}
      </div>
    </div>
  );
}
