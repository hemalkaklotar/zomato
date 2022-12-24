import React from "react";
import { Route, Routes } from "react-router-dom";

import { ProSidebarProvider } from "react-pro-sidebar";
import { Outlet } from "react-router-dom";
import SideBar from "../../Component/RestaurantOwner/SideBar";
import "./style.css";
import AddRestaurant from "../../Component/RestaurantOwner/AddFood/AddFood";
const RestaurantOwner = () => {
  return (
    <div className="container-fluid custom-fluid p-0 border border-primary">
      <div className="d-flex">
        <ProSidebarProvider>
          <SideBar />
        </ProSidebarProvider>
        <Outlet />
      </div>
    </div>
  );
};

export default RestaurantOwner;
