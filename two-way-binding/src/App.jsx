import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    console.log("Submitted by", name);
    setName("");
  };
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        {/* <h1>{name}</h1> */}
        <input
          className="px-3 py-2 border rounded-md shadow-sm"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
