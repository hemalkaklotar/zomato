import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const BreadCrumb = () => {
  return (
    <nav className="container-xxl my-3 ps-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="#">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="#">Library</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumb;
