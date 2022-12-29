import React from "react";
import { useContext } from "react";
import { Context } from "../Context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useContext(Context);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GenZ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mr-auto">
              <Link to={"/"}>
                <li className="nav-item active ">
                  <div className="nav-link ">
                    Home <span className="sr-only ">(current)</span>
                  </div>
                </li>
              </Link>
              <Link to={"/details"}>
                <li className="nav-item active mr-5 ">
                  <div className="nav-link pl-5">Details</div>
                </li>
              </Link>
              <li className="nav-item user-info">
                <div className="mt-2">Hello, {state.name}</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
