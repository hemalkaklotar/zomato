import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container-xxl">
      <nav className="navbar d-flex justify-content-between align-items-center p-0">
        <Link className="navbar-brand  m-0 pt-0" to="/">
          <i className="fa-sharp fa-solid fa-mobile-screen-button p-0 m-0 icon-bg-light"></i>
          <span> Get the App</span>
        </Link>
        <ul className="list-unstyled mt-3">
          <li className="">
            <i className="fa-solid fa-user icon-bg-main fs-5"></i>
            {/* <i className="fa-solid fa-circle-user"></i> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
