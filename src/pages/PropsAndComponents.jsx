import React from "react";
import "./PropsAndComponents.css";
import Nav from "../components/Nav";

const concepts = [
  { component: "Login Form", path: "/loginform" },
  { component: "Counter App", path: "/counterapp" },
  { component: "Search Filter", path: "/searchfilter" },
  { component: "Fetch API", path: "/fetchapi" },
];

export default function PropsAndComponents() {
  return (
    <div className="props_container">
      <div className="props_inner-container">
        <h2>React Basics</h2>
        {concepts.map((elem) => (
          <Nav name={elem.component} path={elem.path} />
        ))}
      </div>
    </div>
  );
}
