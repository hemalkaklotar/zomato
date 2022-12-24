import React from "react";
import CollectionList from "../Component/HomePage/CollectionList/CollectionList";
import ConsumeFood from "../Component/HomePage/ConsumeFood/ConsumeFood";
import Header from "../Component/HomePage/Header/Header";
import PopularLocality from "../Component/HomePage/PopularLocality/PopularLocality";

const Home = () => {
  return (
    <div>
      <Header />
      <ConsumeFood />
      <CollectionList />
      <PopularLocality />
    </div>
  );
};

export default Home;
