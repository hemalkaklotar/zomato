import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../Component/Common/BreadCrumb/BreadCrumb";
import FoodTabOptions from "../Component/FoodPage/FoodTabOtions/FoodTabOptions";
import Header from "../Component/FoodPage/Header/Header";
const Food = () => {
  const [activeTab, setActiveTab] = useState("delevery");

  return (
    <div>
      <Header />
      <BreadCrumb />
      <FoodTabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mx-0 px-0 mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Food;

{
  /* {getCorrectScreen(activeTab)} */
}
// const getCorrectScreen = (tab) => {
//   switch (tab) {
//     case "Delivery":
//       return <Delivery />;

//     case "Dining Out":
//       return <DiningOut />;

//     case "Nightlife":
//       return <NightLife />;

//     default:
//       return <Delivery />;
//   }
// };
