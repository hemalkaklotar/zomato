import React from "react";
import "./style.css";
import collectionlist1 from "../../../images/collectionlist1.avif";
import collectionlist2 from "../../../images/collectionlist2.avif";
import collectionlist3 from "../../../images/collectionlist3.avif";
import collectionlist4 from "../../../images/collectionlist4.avif";

const CollectionList = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="container-xxl">
        <div className="section-collection py-5">
          <h2 className="section-heading">Collections </h2>
          <div className="row">
            <div className="col-md-9">
              <h6 className="section-subheading m-0 p-0">
                Explore curated list of top restaurant, cafes, pubs, and bars in
                Ahmedabad, based on trends
              </h6>
            </div>
            <div className="col-md-3 d-none d-md-block">
              <a className="section-explore-more m-0 p-0">
                <h6>
                  All collection in Ahmedabad{" "}
                  <i className="ms-3 fa-solid fa-caret-right"></i>
                </h6>
              </a>
            </div>
          </div>

          <div className="section-collection-lists mt-3 row">
            <div className="col-6 col-sm-6 col-md-3 mb-3 p-1">
              <a href="" className="text-decoration-none position-relative">
                <div className="img-box">
                  <img src={collectionlist1} alt="" />
                </div>
                <div className="overlay d-flex flex-column justify-content-end">
                  <p className="p-0 m-0 ms-2">Newly Opened</p>
                  <p className="p-0 m-0 ms-2 mb-1">
                    13 Places <i className="ms-3 fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mb-3 p-1 ">
              <a href="" className="text-decoration-none position-relative">
                <div className="img-box">
                  <img src={collectionlist2} alt="" />
                </div>
                <div className="overlay d-flex flex-column justify-content-end">
                  <p className="p-0 m-0 ms-2">Best of Ahmedabad</p>
                  <p className="p-0 m-0 ms-2 mb-1">
                    40Places <i className="ms-3 fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mb-3 p-1">
              <a href="" className="text-decoration-none position-relative">
                <div className="img-box">
                  <img src={collectionlist3} alt="" />
                </div>
                <div className="overlay d-flex flex-column justify-content-end">
                  <p className="p-0 m-0 ms-2">Trending this week</p>
                  <p className="p-0 m-0 ms-2 mb-1">
                    36 Places <i className="ms-3 fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mb-3 p-1">
              <a href="" className="text-decoration-none position-relative">
                <div className="img-box">
                  <img src={collectionlist4} alt="" />
                </div>
                <div className="overlay d-flex flex-column justify-content-end">
                  <p className="p-0 m-0 ms-2">Most Romantic restaurant</p>
                  <p className="p-0 m-0 ms-2 mb-1">
                    21 Places <i className="ms-3 fa-solid fa-caret-right"></i>
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="row d-block mt-3 d-md-none">
            <div className="col">
              <a className="section-explore-more m-0 p-0">
                <h6>
                  All collection in Ahmedabad{" "}
                  <i className="ms-3 fa-solid fa-caret-right"></i>
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
