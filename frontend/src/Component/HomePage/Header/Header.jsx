import React from "react";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Searchbar from "../../Common/Searchbar/Searchbar";

const Header = () => {
  return (
    <div>
      <div className="container-fluid header">
        {/* navbar */}
        <Navbar />

        {/* main headder inner content */}

        <div className="header-content-area">
          <div className="cmp-name-img text-light">
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              className="high-res-image"
              alt=""
            />
          </div>
          <p className="caption">
            Discover the best food & drinks in Ahmedabad
          </p>
          <div className="w-100">
            <Searchbar />
          </div>
          {/* <div className="search-recipe-area">
            <form className="d-md-flex w-100">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
