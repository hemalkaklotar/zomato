import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.css";

const DropDownMenu = ({ filterTitle }) => {
  return (
    <div>
      <div className="dropdown-menu-wrapper pt-4 px-4">
        <h4 className="heading">{filterTitle}</h4>
        <div className="form-group">
          <input
            type="text"
            className="form-control search-cusines py-2"
            placeholder="Search here"
          />
        </div>
        <div className="mt-4 cusinies-types-wrapper">
          <div className="grid">
            <div className="col-sm my-2">
              <div className="form-check d-flex align-items-center pt-0">
                <label className="form-check-label">
                  <input
                    className="form-check-input me-3 mb-1 p-0"
                    type="checkbox"
                    value=""
                  />
                  Default CheckBox
                </label>
              </div>
            </div>
            <div className="col-sm my-2">
              <div className="form-check d-flex  align-items-center pt-0">
                <label className="form-check-label">
                  <input
                    className="form-check-input me-3 mb-1 p-0"
                    type="checkbox"
                    value=""
                  />
                  Default CheckBox
                </label>
              </div>
            </div>

            <div className="col-sm my-2">
              {" "}
              <div className="form-check d-flex align-items-center pt-0">
                <label className="form-check-label">
                  <input
                    className="form-check-input me-3 mb-1 p-0"
                    type="checkbox"
                    value=""
                  />{" "}
                  Default CheckBox
                </label>
              </div>
            </div>
            <div className="col-sm my-2">
              {" "}
              <div className="form-check d-flex align-items-center pt-0">
                <label className="form-check-label">
                  <input
                    className="form-check-input me-3 mb-1 p-0"
                    type="checkbox"
                    value=""
                  />{" "}
                  Default CheckBox
                </label>
              </div>
            </div>
          </div>
          {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </div>
        <div className="d-flex mt-3 mb-3 justify-content-end align-items-center">
          <button className="clear-all btn">clear all</button>
          <button className="apply btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

// filterTitle === "Cuisines" ?  (
//        <div>
//          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//        </div>
//      ) : <div>cs</div>
