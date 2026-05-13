import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import Footer from "./components/Footer.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import Profile from "./pages/Profile.jsx";
// import Home from "./pages/Home.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import Men from "./pages/Men.jsx";
// import Product from "./pages/Product.jsx";
// import Settings from "./pages/Settings.jsx";

import {
  Home,
  About,
  Profile,
  NotFound,
  Men,
  Women,
  Product,
  Settings,
  Contact,
} from "./pages";
import { Navbar, Footer, Hero } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
