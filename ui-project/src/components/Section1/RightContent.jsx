import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className="flex gap-5 overflow-x-auto flex-nowrap h-full w-2/3 p-5">
      {props.users.map(function (elem) {
        return <RightCard img={elem.img} intro={elem.intro} tag={elem.tag} />;
      })}
    </div>
  );
};

export default RightContent;
