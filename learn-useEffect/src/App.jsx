import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function changeA() {
    console.log("A is changing");
  }
  function changeB() {
    console.log("B is changing");
  }

  useEffect(
    function () {
      console.log(changeA());
      console.log("useEffect is running");
    },
    [a],
  );
  useEffect(
    function () {
      console.log(changeB());
      console.log("useEffect is running");
    },
    [b],
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Click
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
