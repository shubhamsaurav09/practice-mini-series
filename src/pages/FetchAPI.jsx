import React, { useEffect, useState } from "react";
import "./FetchAPI.css";
import Axios from "axios";
import Card from "../components/Card";

export default function FetchAPI() {
  const [fetchedData, setfetchedData] = useState([]);

  const fetchData = () => {
    Axios.get("https://random-data-api.com/api/users/random_user?size=10").then(
      (response) => {
        setfetchedData(response.data);
      }
    );
  };

  useEffect(() => fetchData(), []);

  return (
    <div className="fetch_api_container">
      <button id="fetch_button" onClick={fetchData}>
        Fetch Random
      </button>
      <div className="fetch_inner_container">
        {fetchedData.map((elem) => (
          <Card
            image={elem.avatar}
            firstName={elem.first_name}
            lastName={elem.last_name}
            title={elem.employment.title}
            key={elem.id}
          />
        ))}
      </div>
    </div>
  );
}
