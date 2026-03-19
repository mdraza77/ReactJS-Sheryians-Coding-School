import React from "react";
import {MoveRight} from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className="shrink-0 h-full overflow-hidden relative w-60 rounded-4xl">
      <img className="object-cover h-full w-full" src={props.img} alt="" />
      <div className="top-0 left-0 absolute w-full h-full p-6 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-8 w-8 flex justify-center items-center text-2xl font-semibold">
          1
        </h2>
        <p className="text-medium leading-relaxed mt-40 text-white">
          {props.intro}
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-medium">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white py-2 px-2 rounded-full font-medium">
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
