function Content(props) {
  return (
    <div
      className="d-flex flex-lg-row  flex-md-column flex-sm-column container justify-content-center mt-3 text-white"
      style={{ color: "grey" }}
    >
      {props.children}
    </div>
  );
}
export default Content;
