import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState("");
  const [axisoData, setaxisoData] = useState("");
  const [newData, setnewData] = useState([]);

  // Method 1 to call api
  const getData = async () => {
    setData("Data Received by Fetch");
    console.log("Data Received by Fetch");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    const data = await response.json();
  };

  // Method 2 to call api
  const get_data = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    setaxisoData("Data Received by Axios");
    console.log(response.data);
  };

  const getNewData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setnewData(response.data);
  };

  return (
    <div>
      <h1>{data}</h1>
      <h1>{axisoData}</h1>
      <button
        onClick={() => {
          getData();
        }}
      >
        Get Data by Fetch
      </button>
      <button
        onClick={() => {
          get_data();
        }}
      >
        Get Data by Axios
      </button>

      <div>
        <div>
          {newData.map(function (elem, idx) {
            return (
              <h3>
                {idx + 1}. {elem.author}
              </h3>
            );
          })}
        </div>
        <button
          onClick={() => {
            getNewData();
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default App;
