import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-40 w-40 bg-white overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <h2 className="font-bold text-l">{props.elem.author}</h2>
      </a>
    </div>
  );
};

export default Card;
