import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuItem,
  ProSidebarProvider,
  Sidebar,
  useProSidebar,
} from "react-pro-sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const SideBar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        position: "sticky",
        top: "0",
        bottom: "0",
      }}
    >
      <Sidebar className="border border-primary" breakPoint="md">
        <Menu>
          <MenuItem
            icon={
              !collapsed ? (
                <RxCross2
                  style={{ border: "1px solid red" }}
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                />
              ) : (
                <RxHamburgerMenu
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                ></RxHamburgerMenu>
              )
            }
          ></MenuItem>
          <MenuItem routerLink={<Link to="AddFood" />}>
            Add Food
          </MenuItem>
        </Menu>
        {/* {!collapsed && (
          <button
            onClick={broken ? () => toggleSidebar() : () => collapseSidebar}
          >
            x
          </button>
        )} */}
      </Sidebar>
    </div>
  );
};

export default SideBar;
