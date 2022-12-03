import React, { useState } from "react";
import "./SearchFilter.css";

const list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];

export default function SearchFilter() {
  const [filteredList, setFilteredList] = useState(list);

  const handleSearch = (event) => {
    let filteredValues = [];
    let keyword = event.target.value;

    filteredValues = list.filter((elem) =>
      elem.toLowerCase().includes(keyword)
    );
    setFilteredList(filteredValues);
  };

  return (
    <div className="container">
      <h1>Search Filter</h1>
      <div className="inner-container">
        <label htmlFor="search">
          Search:{" "}
          <input id="search" type="text" onChange={handleSearch}></input>
        </label>
        <ul>
          {filteredList.map((elem) => (
            <i>{elem}</i>
          ))}
        </ul>
      </div>
    </div>
  );
}
