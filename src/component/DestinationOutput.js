import Content from "../layout/ContentLayout";
import { useState } from "react";

function DestinationOutput(props) {
  let [counter, setCounter] = useState(0);
  let [Active1, setActive1] = useState("solid white 2px");
  let [Active2, setActive2] = useState("");
  let [Active3, setActive3] = useState("");
  let [Active4, setActive4] = useState("");
  function MarsHandler() {
    setCounter((counter = 1));
    setActive1("");
    setActive3("");
    setActive4("");
    setActive2("solid white 2px");
  }
  function MoonHandler() {
    setCounter((counter = 0));
    setActive1("solid white 2px");
    setActive2("");
    setActive3("");
    setActive4("");
  }
  function EuropaHandler() {
    setCounter((counter = 2));
    setActive3("solid white 2px");
    setActive1("");
    setActive2("");
    setActive4("");
  }
  function TitanHandler() {
    setCounter((counter = 3));
    setActive4("solid white 2px");
    setActive1("");
    setActive2("");
    setActive3("");
  }
  return (
    <div>
      {
        props.destination.map((dest) => {
          return (
            <Content>
              <section className="col-6 px-5">
                <p className="fs-5">
                  <span className="grey">01</span> &nbsp; &nbsp; PICK YOUR
                  DESTINATION
                </p>
                <br />
                <br />
                <img src={dest.images} alt="system" className="dest-img" />
              </section>
              <section className="col-6">
                <br />
                <br />
                <div>
                  <button
                    className="color pd"
                    onClick={MoonHandler}
                    style={{ borderBottom: Active1 }}
                  >
                    MOON
                  </button>
                  <button
                    className="mx-lg-4 ml pd color"
                    onClick={MarsHandler}
                    style={{ borderBottom: Active2 }}
                  >
                    MARS
                  </button>
                  <button
                    className="color ml pd"
                    onClick={EuropaHandler}
                    style={{ borderBottom: Active3 }}
                  >
                    EUROPA
                  </button>
                  <button
                    className="mx-lg-4 ml pd color"
                    onClick={TitanHandler}
                    style={{ borderBottom: Active4 }}
                  >
                    TITAN
                  </button>
                </div>
                <div>
                  <p style={{ width: "25rem" }} className="tw">
                    <span className="fs">{dest.name}</span>
                    <br />
                    <small className="color">{dest.description}</small>
                  </p>
                  <hr
                    style={{ width: "23rem", marginTop: "2rem" }}
                    className="tw"
                  />
                  <div className="d-flex gap-sm-5 mt-4 flex tw f">
                    <span>
                      <small className="color">AVG. DISTANCE</small>
                      <br />
                      <span className="h5">{dest.distance}</span>
                    </span>

                    <span className="ml-5">
                      <small className="color">EST.TRAVEL TIME</small>
                      <br />
                      <span className="h5">{dest.travel}</span>
                    </span>
                  </div>
                </div>
              </section>
            </Content>
          );
        })[counter]
      }
    </div>
  );
}
export default DestinationOutput;
