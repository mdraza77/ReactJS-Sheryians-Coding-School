import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-4">
        <button
          className="px-3 py-2 rounded bg-blue-500 active:scale-95 active:bg-blue-700 hover:bg-blue-600 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Return to home
        </button>
        <button
          className="px-3 py-2 rounded bg-blue-500 active:scale-95 active:bg-blue-700 hover:bg-blue-600 cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          Prev
        </button>
        <button
          className="px-3 py-2 rounded bg-blue-500 active:scale-95 active:bg-blue-700 hover:bg-blue-600 cursor-pointer"
          onClick={() => {
            navigate(+1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
