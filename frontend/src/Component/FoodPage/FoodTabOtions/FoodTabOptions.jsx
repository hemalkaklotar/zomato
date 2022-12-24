import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { foodDeliveryTypes } from "../../../staticAction";
import { foodPageRoutes } from "../../../staticAction";

const FoodTabOptions = ({ activeTab, setActiveTab }) => {
  const tabs = [
    {
      id: 1,
      name: foodDeliveryTypes.Delivery,
      to: foodPageRoutes.Delivery,
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop: "#FCEEC0",
      backdroplight: "#f5f5f5",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    },
    {
      id: 2,
      name: foodDeliveryTypes.DiningOut,
      to: foodPageRoutes.DiningOut,
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: "#E5F3F3",
      backdroplight: "#f5f5f5",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    },
    {
      id: 3,
      name: foodDeliveryTypes.NightLife,
      to: foodPageRoutes.NightLife,
      active_img:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "#EDf4FF",
      backdroplight: "#f5f5f5",
      inactive_img:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    },
  ];
  return (
    <div className="container-fluid pb-0 border-btm">
      <div className="container-xxl">
        <div className="options-wrapper max-width">
          {tabs.map((tab) => (
            <Link to={`${tab.to}`}>
              <div
                className={`tab-item ${activeTab === tab.name && "active-tab"}`}
                onClick={() => setActiveTab(tab.name)}
              >
                <div
                  className="tab-image-container absolute-center"
                  style={{
                    backgroundColor: `${
                      activeTab === tab.name ? tab.backdrop : tab.backdroplight
                    }`,
                  }}
                >
                  <img
                    src={
                      activeTab === tab.name ? tab.active_img : tab.inactive_img
                    }
                    className="tab-image"
                    alt={tab.name}
                  />
                </div>
                <div className="tab-name">{tab.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodTabOptions;
