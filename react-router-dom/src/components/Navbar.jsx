import React from "react";

const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <a href="/" className="btn btn-ghost text-xl">
            Md Raza
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <button>About Emplyees</button>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-64 lg:w-auto"
          />
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button>About</button>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <button>About Emplyees</button>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
