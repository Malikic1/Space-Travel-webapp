import Content from "../layout/ContentLayout";
import { useState } from "react";

function CrewOutput(props) {
  let [counter, SetCounter] = useState(0);
  let [BgColor, SetBgColor] = useState("white");
  let [BgSilver1, SetBgSilver1] = useState("");
  let [BgSilver2, SetBgSilver2] = useState("");
  let [BgSilver3, SetBgSilver3] = useState("");
  function FirstCrew() {
    SetCounter((counter = 0));
    SetBgSilver1("");
    SetBgSilver2("");
    SetBgSilver3("");
    SetBgColor("white");
  }
  function SecondCrew() {
    SetCounter((counter = 1));
    SetBgColor("");
    SetBgSilver1("white");
    SetBgSilver2("");
    SetBgSilver3("");
  }
  function ThirdCrew() {
    SetCounter((counter = 2));
    SetBgColor("");
    SetBgSilver1("");
    SetBgSilver2("white");
    SetBgSilver3("");
  }
  function FourthCrew() {
    SetCounter((counter = 3));
    SetBgColor("");
    SetBgSilver1("");
    SetBgSilver2("");
    SetBgSilver3("white");
  }
  return (
    <div>
      {
        props.crews.map((crew) => {
          return (
            <Content>
              <section className="col-6 sec1">
                <div>
                  <p className="mb-5 fs-5 position-md">
                    <span className="grey">02</span>&nbsp;&nbsp; MEET YOUR CREW
                  </p>
                  <p className="pt-5">
                    <span className="fs-4 grey">{crew.role}</span>
                    <br />
                    <span className="fs-crew">{crew.name}</span>
                  </p>
                  <p style={{ width: "23rem" }} className="tw">
                    <small className="color">{crew.bio}</small>
                  </p>
                </div>
                <br />
                <div className="position-mdd">
                  <button onClick={FirstCrew}>
                    <div
                      className="p-2 rounded-circle bg-c"
                      style={{ backgroundColor: BgColor }}
                    ></div>
                  </button>
                  <button onClick={SecondCrew}>
                    <div
                      className="p-2 rounded-circle bg-c"
                      style={{ backgroundColor: BgSilver1 }}
                    ></div>
                  </button>
                  <button onClick={ThirdCrew}>
                    <div
                      className="p-2 rounded-circle bg-c"
                      style={{ backgroundColor: BgSilver2 }}
                    ></div>
                  </button>
                  <button onClick={FourthCrew}>
                    <div
                      className="p-2 rounded-circle bg-c"
                      style={{ backgroundColor: BgSilver3 }}
                    ></div>
                  </button>
                </div>
              </section>
              <section className="my-md-5 my-sm-5 my-lg-0 sec2">
                <img src={crew.images} alt="aaa" className="crew-img" />
              </section>
            </Content>
          );
        })[counter]
      }
    </div>
  );
}
export default CrewOutput;
