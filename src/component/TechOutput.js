import { useState } from "react";
import ContentRev from "../layout/ContentLayoutRev";
function TechOutput(props) {
  let [counter, setCounter] = useState(0);
  let [Bg1, setBg1] = useState("white");
  let [Bg1color, setBg1color] = useState("black");
  let [Bg2, setBg2] = useState("");
  let [Bg2color, setBg2color] = useState("");
  let [Bg3, setBg3] = useState("");
  let [Bg3color, setBg3color] = useState("");

  function ButtonOne() {
    setCounter((counter = 0));
    setBg1("white");
    setBg2("");
    setBg3("");
    setBg1color("black");
    setBg2color("");
    setBg3color("");
  }
  function ButtonTwo() {
    setCounter((counter = 1));
    setBg2("white");
    setBg1("");
    setBg3("");
    setBg1color("");
    setBg2color("black");
    setBg3color("");
  }
  function ButtonThree() {
    setCounter((counter = 2));
    setBg2("");
    setBg1("");
    setBg3("white");
    setBg1color("");
    setBg2color("");
    setBg3color("black");
  }
  return (
    <div>
      {
        props.technology.map((tech) => {
          return (
            <ContentRev>
              <section style={{ width: "30rem" }}>
                <p className="fs-5 mb-5 pm">
                  <span className="grey">03</span> &nbsp; &nbsp; SPACE LAUNCH
                  101
                </p>
                <div className="d-flex pt-3 gap-4 flex-md-column flex-sm-column flex-lg-row">
                  <div className="d-flex flex-lg-column gap-3 flex-md-row justify-content-md-center  justify-content-sm-center justify-content-lg-none js">
                    <buttton
                      onClick={ButtonOne}
                      className="border border-light text-center rounded-circle pt-3"
                      style={{ backgroundColor: Bg1, color: Bg1color }}
                    >
                      1
                    </buttton>
                    <buttton
                      onClick={ButtonTwo}
                      className="border border-light text-center rounded-circle pt-3"
                      style={{ backgroundColor: Bg2, color: Bg2color }}
                    >
                      2
                    </buttton>
                    <buttton
                      onClick={ButtonThree}
                      className="border border-light text-center rounded-circle pt-3"
                      style={{ backgroundColor: Bg3, color: Bg3color }}
                    >
                      3
                    </buttton>
                  </div>
                  <div>
                    <p>
                      <small className="color">THE TECHNOLOGY...</small>
                      <br />
                      <span className="fs-crew">{tech.name}</span>
                      <br />
                      <small className="color">{tech.description}</small>
                    </p>
                  </div>
                </div>
              </section>
              <section className="col-6">
                <img
                  src={tech.images}
                  alt="aaa"
                  className="tech-img mt-5 mb-md-4 mb-sm-4 mb-lg-0"
                  style={{ float: "right" }}
                />
              </section>
            </ContentRev>
          );
        })[counter]
      }
    </div>
  );
}
export default TechOutput;
