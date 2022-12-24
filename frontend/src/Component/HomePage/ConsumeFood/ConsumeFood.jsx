import React from "react";
import OrderDinning from "../../../images/order-dinning.jpg";
import orderOnline from "../../../images/orderOnline.avif";

import "./style.css";



const ConsumeFood = () => {
  return (
    <div className="container-fluid">
      <div className="container-xxl">
        <div className="d-flex justify-content-between order-options mt-5">
          <div className="col-md-6 order-online pe-3">
            {/* order online */}
            <div className="img-box">
              <img src={orderOnline} alt="" />
            </div>
            <div className="card-body">
              <span className="d-block txt-order-online">Order Online</span>
              <span className="d-block txt-order-online-description mt-0">
                Stay home and order to your doorstep
              </span>
            </div>
          </div>
          <div className="col-md-6  ps-3 order-dinning">
            {/* dinning  */}
            <div className="img-box">
              <img src={OrderDinning} alt="" />
            </div>
            <div className="card-body">
              <span className="d-block txt-order-online">Dinning</span>
              <span className="d-block txt-order-online-description mt-0">
                View the city's favourite dinning venues
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumeFood;
