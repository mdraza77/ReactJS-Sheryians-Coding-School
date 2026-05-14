import React, { createContext } from "react";

const ThemeContext = (props) => {
  export const ThemeDataContext = createContext();
  return (
    <div>
      <ThemeDataContext.Provider value="Raza">{props.children}</ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
