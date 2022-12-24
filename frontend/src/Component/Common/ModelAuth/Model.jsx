import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./style.css";
const Model = ({
  modalShow,
  setModalShow,
  setEmail,
  setMobileNumber,
  loginSubmit,
  viewOtpForm,
  submitOTP,
  setuserOTP,
}) => {
  return (
    <Modal
      show={modalShow}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {!viewOtpForm ? "Sign Up" : "OTP"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={loginSubmit}>
          {!viewOtpForm ? (
            <div>
              <div className="form-group mb-4">
                <label htmlFor="fullname" className="mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="emailaddress" className="mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>
          ) : (
            <div className="form-group my-4">
              <input
                type="text"
                name="digit"
                className="form-control otp-field"
                onChange={(e) => setuserOTP(e.target.value)}
                //       onKeyUp={(e) => tabChange(index, e)}
                //       ref={(element) => (inputReference.current[index] = element)}
                maxLength="6"
              />
            </div>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-plain" onClick={(e) => setModalShow(false)}>
          Close
        </Button>
        {!viewOtpForm ? (
          <Button type="submit" className="btn btn-primary" onClick={loginSubmit}>
            Send OTP
          </Button>
        ) : (
          <Button type="submit" className="btn btn-primary" onClick={submitOTP}>
            Verify OTP
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Model;
