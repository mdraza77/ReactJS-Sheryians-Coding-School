import React, { useState } from "react";

const App = () => {
  const [first, setfirst] = useState(0);
  return (
    <div className="p-5">
      <h1 className="text-2xl text-green-500">Value is {first}</h1>
      <div className="flex gap-2">
        <button
          className="px-2 py-2 text-2xl text-white bg-green-500 rounded"
          onClick={() => {
            setfirst(first - 1);
          }}
        >
          -
        </button>
        <button
          className="px-2 py-2 text-2xl text-white bg-green-500 rounded"
          onClick={() => {
            setfirst(first + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
