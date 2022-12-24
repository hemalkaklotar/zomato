import React from "react";
import { useState } from "react";
import Filters from "../../../Common/FiltersList/Filters";
import Carousel from "../../../Common/Slider/Carousel";

import { BiFilterAlt } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";

const Delivery = () => {
  const filterTabData = [
    {
      id: 1,
      icon: <BiFilterAlt />,
      title: "Filters",
      showDropDown: false,
    },
    {
      id: 2,
      icon: <BsArrowDownUp />,
      title: "Delivery Time",
      showDropDown: false,
    },
    {
      id: 3,
      title: "Rating: 4.0+",
      showDropDown: false,
    },

    {
      id: 4,
      title: "Pure Veg",
      showDropDown: false,
    },
    {
      id: 5,
      title: "Cuisines", // do not change it name
      icon: "",
      showDropDown: true,
    },
    {
      id: 6,
      title: "More Filters", // do not change it name
      showDropDown: true,
    },
  ];

  const [filterstab, setFilterTab] = useState(filterTabData);
  return (
    <div className="container-fluid p-0">
      <Filters filterstab={filterstab} setFilterTab={setFilterTab} />
      <Carousel />
    </div>
  );
};

export default Delivery;
