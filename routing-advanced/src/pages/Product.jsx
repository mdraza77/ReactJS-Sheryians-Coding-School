import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div>
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
