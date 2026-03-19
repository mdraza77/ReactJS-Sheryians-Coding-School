import React from "react";
import Secion1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1581966429913-b4a4f4cf7051?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1666358087085-d9ed7ef9c4da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1581966429913-b4a4f4cf7051?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      tag: "UnderBanked",
    },
  ];
  return (
    <div>
      <Secion1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
