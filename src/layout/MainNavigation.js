import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

function MainNavigation() {
  let [Active1, setActive1] = useState("solid white 2px");
  let [Active2, setActive2] = useState("");
  let [Active3, setActive3] = useState("");
  let [Active4, setActive4] = useState("");
  function HomeHandler() {
    setActive1("solid white 2px");
    setActive2("");
    setActive3("");
    setActive4("");
  }
  function DestHandler() {
    setActive1("");
    setActive3("");
    setActive4("");
    setActive2("solid white 2px");
  }
  function CrewHandler() {
    setActive3("solid white 2px");
    setActive1("");
    setActive2("");
    setActive4("");
  }
  function TechHandler() {
    setActive4("solid white 2px");
    setActive1("");
    setActive2("");
    setActive3("");
  }
  return (
    <div className="header position-absolute d-flex ">
      <div className="brand mx-lg-5 mx-sm-3 align-self-center">
        <span>
          <img src={logo} alt="logo" />
        </span>
      </div>
      <div className="col-5 align-self-center">
        <hr className="d-n" />
      </div>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light position-absolute">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav px-md-5">
            <li className="nav-item mx-md-4">
              <Link
                to={"/"}
                className="text-decoration-none color  pb-md-3"
                onClick={HomeHandler}
                style={{ borderBottom: Active1 }}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/destination"}
                className="text-decoration-none color  pb-md-3"
                onClick={DestHandler}
                style={{ borderBottom: Active2 }}
              >
                DESTINATION
              </Link>
            </li>
            <li className="nav-item mx-md-4">
              <Link
                to={"/crew"}
                className="text-decoration-none color pb-md-3"
                onClick={CrewHandler}
                style={{ borderBottom: Active3 }}
              >
                CREW
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/technology"}
                className="text-decoration-none color  pb-md-3"
                onClick={TechHandler}
                style={{ borderBottom: Active4 }}
              >
                TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MainNavigation;
