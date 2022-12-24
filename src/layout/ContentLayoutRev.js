function ContentRev(props) {
  return (
    <div
      className="d-flex flex-lg-row flex-md-column-reverse  flex-sm-column-reverse container justify-content-center mt-3 text-white"
      style={{ color: "grey" }}
    >
      {props.children}
    </div>
  );
}
export default ContentRev;
