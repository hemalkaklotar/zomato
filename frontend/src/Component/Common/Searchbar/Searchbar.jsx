import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import "./style.css";
const Searchbar = () => {
  return (
    <div className="search-recipe-area mx-auto">
      <form className="d-md-flex">
        <div className="form-group header-search">
          <select className="form-control location">
            <option value="">Memnagar</option>
          </select>
          <span className="location-logo">
            <HiLocationMarker />
          </span>
          <span className="arrow-down">
            <AiFillCaretDown />
          </span>
        </div>
        <div className="form-group header-search mt-2 mt-md-0 mb-3 mb-md-0">
          <div className="line"></div>
          <input
            type="text"
            className="form-control"
            placeholder="Search for restaurant, cuisine or a dish"
          />
          <span className="search-logo">
            <BsSearch />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
