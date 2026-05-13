import React from "react";
import { Routes, Route } from "react-router-dom";
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
  Courses,
  CourseDetails,
} from "./pages";
import { Navbar, Navbar2, Footer, Hero } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        {/* Dynamic Routing */}
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
