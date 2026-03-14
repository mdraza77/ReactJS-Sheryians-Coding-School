import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user='Md Raza' age={20} img='https://plus.unsplash.com/premium_photo-1694169633723-6250940cb511?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Plant' />
      <Card user='Ayush' age={20} img='https://plus.unsplash.com/premium_photo-1770545003886-8c2a7eeea54e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Plant' />
    </div>
  );
};

export default App;
