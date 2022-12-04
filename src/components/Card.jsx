import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.firstName}></img>
      <p style={{ fontWeight: "bold" }} id="fullName">
        {props.firstName} {props.lastName}
      </p>
      <p>{props.title}</p>
    </div>
  );
}
