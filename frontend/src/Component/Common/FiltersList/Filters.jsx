import React, { useEffect, useState } from "react";
import "./style.css";
import { VscArrowDown } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

const Filters = ({ filterstab, setFilterTab }) => {
  return (
    <div className="container-xxl">
      <div className="d-flex gap-4 flex-wrap filterlist justify-content-start align-items-center">
        {filterstab.map((fiterItem) =>
          fiterItem.showDropDown ? (
            <Dropdown>
              <Dropdown.Toggle className="dropdown-toggle">
                {fiterItem.title}
                <VscArrowDown />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <DropDownMenu filterTitle={fiterItem.title} />
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div className="filteritem">
              {fiterItem?.icon && fiterItem.icon}
              {fiterItem.title}
            </div>
          )
        )}
      </div>
    </div>

    //   {filterstab.map((fiterItem) => (
    //     <div
    //       className={`filteritem ${fiterItem?.showDropDown ? "dropdown" : ""}`}
    //     >
    //       {fiterItem?.icon && fiterItem.icon}
    //       {fiterItem.title}
    //       {fiterItem?.showDropDown && <VscArrowDown />}
    //  {fiterItem?.showDropDown && (
    //   <div className="position-absolute">
    //     <div className="filter-megamenu">

    //     </div>
    //   </div>
    // )}
    // </div>
    // ))}
    //  <Dropdown className="filteritem">
    //   <Dropdown.Toggle >
    //     Dropdown Button
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
    // </div>
  );
};

export default Filters;
