import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
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
    <div className="search_container">
      <div className="search_inner_container">
        <h1>Search Filter</h1>
        <label htmlFor="search">
          Search:{" "}
          <DebounceInput
            id="search"
            type="text"
            debounceTimeout={1000}
            onChange={handleSearch}
          ></DebounceInput>
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
