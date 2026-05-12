import React from "react";

const App = () => {
  const name = localStorage.setItem("name", "Md Raza");
  const user = localStorage.getItem("name");
  const age = localStorage.setItem("age", "20");
  const user_age = localStorage.getItem("age");

  const mee = {
    name: "Md Raza",
    age: 20,
  };

  localStorage.setItem("mee", JSON.stringify(mee));

  const myself = JSON.parse(localStorage.getItem("mee"));
  console.log(myself)
  // const remove = localStorage.removeItem("name");
  return (
    <div>
      <h1>{user}</h1>
      <h1>{user_age}</h1>
      {/* <h1>{myself}</h1> */}
    </div>
  );
};

export default App;
