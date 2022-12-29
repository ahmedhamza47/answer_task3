import React from "react";
import { useContext } from "react";
import { Context } from "../Context/context";
import axios from "axios";
import "../Main.css";
import { useNavigate } from "react-router-dom";
const Info = () => {
  const [state, setState] = useContext(Context);
  const handleClick = async () => {
    axios
      .get("https://randomuser.me/api/")
      .then(function (response) {
        const info = response.data.results[0];
        console.log(info);
        setState({
          name: info.name.first + " " + info.name.last,
          email: info.email,
          country: info.location.country,
          phoneNo: info.phone,
        });

        // setState(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate("/details");
  };
  return (
    <>
      <div className="main pt-5">
        <div className="box justify-content-center text-center">
          <h2 className="mt-5 mb-4"> Fake User Info Generator</h2>
          <div className="icon">
            <i className="bi bi-person-fill user"></i>
            <div className="info mb-4">
              <h5> {state.name}</h5>
              <h5>{state.email}</h5>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClick()}
            >
              {" "}
              New User
            </button>
            <br />
            <button
              type="button"
              className="btn btn-primary ml-2 my-3"
              onClick={() => handleDetails()}
            >
              Details
            </button>
          </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
      </div>
    </>
  );
};

export default Info;
