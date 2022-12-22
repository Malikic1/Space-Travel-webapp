import Content from "../layout/ContentLayout";
function HomeContent() {
  return (
    <Content>
      <section style={{ width: "23rem" }} className="">
        <br />
        <br />
        <p>
          <span className="fs-5 color" style={{ fontFamily: "courier" }}>
            SO, YOU WANT TO TRAVEL TO
          </span>
          <br />
          <span className="fs">SPACE</span>
          <p className="tw">
            <small className="color">
              Let's face it; if you want to go to space,you might as well
              genuinly go to outer space and not hover kind of on the edge of
              it. Well sit back and relax because we'll give you a truly out of
              the world experience!{" "}
            </small>
          </p>
        </p>
      </section>
      <section className="col-6 align-self-end mb-4 mg-t">
        <div className="circle text-center bg-white pt-3 fs-4 text-dark rounded-pill align-self-bottom shadow">
          <br />
          EXPLORE
        </div>
      </section>
    </Content>
  );
}
export default HomeContent;
