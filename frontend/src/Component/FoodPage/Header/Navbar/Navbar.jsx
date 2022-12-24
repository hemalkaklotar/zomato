import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../../config/EmailConfig";
// import {
//   getAuth,
//   fetchSignInMethodsForEmail,
//   EmailAuthProvider,
// } from "firebase/auth";
import Searchbar from "../../../Common/Searchbar/Searchbar";
import "./style.css";
import Model from "../../../Common/ModelAuth/Model";
const Navbar = () => {
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [userOTP, setuserOTP] = useState("");

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
    console.log(window.recaptchaVerifier);
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();

  function loginSubmit() {
    console.log("i will submit data", mobileNumber);
    let phone_number = "+91" + mobileNumber;
    const appVerifier = window.recaptchaVerifier;
    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then((confirmationResult) => {
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        alert(error.message);
      });
    // setViewOtpForm(true);
  }

  function submitOTP(e) {
    console.log("userOTP", userOTP);
    // window.confirmationResult
    //   .confirm(userOTP)
    //   .then((confirmationResult) => {
    //     console.log(confirmationResult);
    //     console.log("success");
    //   })
    //   .catch((error) => {
    //     // User couldn't sign in (bad verification code?)
    //     alert(error.message);
    //   });
  }
  return (
    <div className="container-fluid">
      <div id="recaptcha-container"></div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-xxl d-flex align-items-center  gap-4 flex-row">
          <Link className="navbar-brand m-0 pt-0" to="/">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />{" "}
          </Link>
          <div className="d-flex d-lg-none gap-2 auth">
            <Link>Login</Link>
            <Link variant="primary" onClick={(e) => setModalShow(true)}>
              SignUp
            </Link>
          </div>
          <div className="search-wrappper">
            <Searchbar />
          </div>
          <div className="d-none w-100 d-lg-flex gap-2 auth">
            <Link>Login</Link>
            <Link variant="primary" onClick={(e) => setModalShow(true)}>
              SignUp
            </Link>
          </div>
        </div>
      </nav>
      <Model
        modalShow={modalShow}
        setModalShow={setModalShow}
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
        loginSubmit={loginSubmit}
        viewOtpForm={viewOtpForm}
        submitOTP={submitOTP}
        userOTP={userOTP}
        setuserOTP={setuserOTP}
      />
    </div>
  );
};

export default Navbar;
