import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div>
      <button onClick={() => alert(`${props.name} is clicked`)}>
        {props.name}
      </button>
    </div>
  );
}
