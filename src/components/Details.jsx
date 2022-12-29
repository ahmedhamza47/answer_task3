import React from "react";
import { useContext } from "react";
import { Context } from "../Context/context";
import "../Details.css";
const Details = () => {
  const [state, setState] = useContext(Context);
  return (
    <div className="main ">
      <div className="container main ">
        <div className="display ">
          <h1> Detail Information</h1>
        </div>
        <div className="infos  ">
          <h5>
            Name <span> {state.name}</span>
          </h5>
          <h5>
            Email <span> {state.email}</span>
          </h5>
          <h5>
            Country Origin <span className="country"> {state.country}</span>
          </h5>
          <h5>
            Contact No. <span className="contact"> {state.phoneNo}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Details;
