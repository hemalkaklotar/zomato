import React, { useState, useRef } from "react";
import "./style.css";
import Select from "react-select";
// import { ref, getStorage } from "firebase/storage";
import firebaseConfig from "../../../config/EmailConfig";
import firebase from "firebase/app";

import "firebase/storage";

const AddFood = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  const [foodImages, setFoodImages] = useState([{ foodimage: "" }]);
  const [foodImagesURL, setFoodImagesURL] = useState([]);
  let dataFromGetAPI = [
    { value: "veg", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  function addFoodImagesFeild(e) {
    e.preventDefault();
    if (file) {
      setFoodImages([...foodImages, { foodimage: "" }]);
    }
  }
  function handleFileAdd(e) {
    e.preventDefault();
    setFile(e.target.files[0]);
  }
  function uploadImage(e) {
    e.preventDefault();

    if (!file) {
      return console.log("Hello");
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    const storage = firebase.storage();
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    console.log(uploadTask);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setFoodImagesURL([...foodImagesURL, url]);
          });
      }
    );
  }
  return (
    <div className="add-restaurant">
      <div className="position-sticky">
        <h5>Add New Food</h5>
      </div>
      <div className="container-xxl mx-auto row mt-5">
        <div className="col-12 mx-auto">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Food Name
                  </label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Food Calories
                  </label>
                  <input type="number" className="form-control" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 multiSelectBox">
                  <label htmlFor="" className="form-label">
                    Select Food Category
                  </label>
                  <Select
                    isMulti
                    className="select-box"
                    classNamePrefix="select"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={dataFromGetAPI}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3 multiSelectBox">
                  <label htmlFor="" className="form-label">
                    Select Food Type
                  </label>
                  <Select
                    className="select-box"
                    classNamePrefix="select"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={dataFromGetAPI}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3 multiSelectBox">
                  <label htmlFor="" className="form-label">
                    Food Availibility
                  </label>
                  <Select
                    className="select-box"
                    classNamePrefix="select"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={dataFromGetAPI}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3 multiSelectBox">
                  <label htmlFor="" className="form-label">
                    Time Takes To cook (in Minutes)
                  </label>
                  <input type="number" className="form-control" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end  w-100 ">
              <button
                className="btn btn-plain btn-add-food"
                onClick={addFoodImagesFeild}
              >
                Add Food Images
              </button>
            </div>
            {/* {file ? (
              percent <= 99 ? (
                <h5>{percent} Uploading</h5>
              ) : (
                "Uploadded"
              )
            ) : (
              ""
            )} */}

            {foodImages.map(() => (
              <div className="row my-3">
                <div className="col-12 my-2 add-image">
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={handleFileAdd}
                  />
                  <button
                    className="btn btn-plain btn-uploadImage"
                    onClick={uploadImage}
                  >
                    Upload Image
                  </button>
                </div>
              </div>
            ))}
            <ul>
              {foodImagesURL.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            {/* <div className="mb-3">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" />
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddFood;
