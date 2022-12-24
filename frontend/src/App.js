import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import { ScreenDelivery } from "./Pages/Screen";
import { ScreenDiningOut } from "./Pages/Screen";
import { ScreenNightLife } from "./Pages/Screen";
import RestaurantOwner from "./Pages/RestaurantOwner/RestaurantOwner";
import AddFood from "./Component/RestaurantOwner/AddFood/AddFood";
import { analytics } from "./config/EmailConfig";
import Registration from "./Component/Authentication/Registration";
function App() {
  return (
    <div className="App">
      {/* {console.log(analytics)} */}
      <Routes>
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />}>
          <Route path="" element={<ScreenDelivery />} />
          <Route path="delevery" element={<ScreenDelivery />} />
          <Route path="diningout" element={<ScreenDiningOut />} />
          <Route path="nightlife" element={<ScreenNightLife />} />
        </Route>

        {/* Admin Routes begins From here  */}

        <Route path="/restaurantOwner" element={<RestaurantOwner />}>
          <Route path="AddFood" element={<AddFood />} />
          <Route path="" element={<AddFood />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
