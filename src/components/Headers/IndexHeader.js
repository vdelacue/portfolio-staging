/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="black">

        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header-bg-rp3600.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/*<img*/}
            {/*  alt="..."*/}
            {/*  className="n-logo"*/}
            {/*  src={require("assets/img/now-logo.png")}*/}
            {/*></img>*/}
            <h1 className="h1-seo">Vanessa de La Cuetara</h1>
            <h3 className="title-seo">Full-Stack Engineer</h3>
          </div>
          <h6 className="category category-absolute">
            Design.
          </h6>
          <h6 className="category category-absolute">
            Create.
          </h6>
          <h6 className="category category-absolute">
            Disrupt.
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
