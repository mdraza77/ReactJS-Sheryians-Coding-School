import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img
          src={props.img}
          alt={props.alt}
        />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
