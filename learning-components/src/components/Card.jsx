import React from "react";

const Card = () => {
  const user = "Md Raza";
  return (
    <div>
      <div className="card">
        <h1>{user}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Card;
