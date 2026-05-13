import React from "react";

const Navbar = (props) => {
  const changeTheme = () => {
    props.setTheme("Dark");
  };
  return (
    <div>
      <h1>{props.theme}</h1>
      <button
        onClick={() => {
          changeTheme();
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
