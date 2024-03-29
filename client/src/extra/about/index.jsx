import React from "react";
import "./style1.css";
import Header from "../../component/header";

const Contact = () => {
  return (
    <>
      <Header />
      <section
        className="about-section"
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/2897907.jpg")`,
        }}
      >
        <div className="container-fluid p-0">
          <div className="row no-gutters position-relative">
            <div className="left-header d-none d-lg-block col-lg-3 col-xl-4">
              <div className="v-center-box d-flex align-items-end text-uppercase"></div>
            </div>
            <div
              className="col-lg-9 col-xl-8"
              style={{ backgroundColor: "white" }}
            >
              <div className="main-content p-5">
                <div className="main-header mb-4">
                  <h6
                    className="sub-heading text-uppercase d-block mb-2"
                    style={{ color: "black" }}
                  >
                    Who I am
                  </h6>
                  <h1
                    className="main-heading d-inline-block text-uppercase pb-3 border-bottom"
                    style={{ color: "black" }}
                  >
                    &lt; ABOUT THE CREATOR &gt;
                  </h1>
                </div>

                <div className="row mb-5">
                  <div className="mb-5 mb-sm-4 col-md-4">
                    {/* <img src={""} alt="image" style={{ width: "100%" }} /> */}
                  </div>
                  <div className="col-md-8">
                    <div className="about__text mb-5 mb-sm-4 mb-md-4">
                      <h3 style={{ color: "blue" }}>I'm Dheeraj</h3>
                      <p className="m-0" style={{ color: "black" }}>
                      I am a diligent and reliable individual with a strong work ethic. Punctuality is one of my strengths, and I am consistently eager to acquire new skills. I am known for my friendly, helpful, and courteous demeanor, and I have a keen sense of humor. Whether working independently in a fast-paced environment or collaboratively within a team, I thrive in diverse settings. I possess excellent communication skills, allowing me to be both outgoing and diplomatic, and I am an attentive listener when it comes to problem-solving.
                      </p>
                    </div>
                    <div className="about__skills">
                      <div className="row no-gutters mb-0 mb-sm-4">
                        <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-filled/50/000000/javascript.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                Javascript
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                1+ years of experience in Javascript which is a
                                lightweight, interpreted, object-oriented
                                language with first-class functions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-glyphs/50/000000/react.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                React
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                1+ years of experience in React which is a
                                library for building composable user interfaces.
                                It encourages the creation of reusable UI
                                components, which present data that changes over
                                time
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row no-gutters mb-0 mb-sm-4">
                        <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                HTML
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                2+ years of experience in Html which is
                                hypertext markup language, a formatting system
                                for displaying material retrieved over the
                                Internet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-0 pl-sm-3 col-sm-6">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-filled/50/000000/css3.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                CSS
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                2+ years of experience in Cascading Style Sheets
                                which describes how HTML elements are to be
                                displayed on screen, paper, or in other media
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-data">
                  <div className="row no-gutters pt-5 border-top">
                    <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img
                          src="https://img.icons8.com/plasticine/100/000000/kawaii-coffee.png"
                          style={{ height: "50px" }}
                        />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            10,950
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Cups of coffee
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-coding-computer-technology-itim2101-lineal-color-itim2101.png" />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            5,674,093
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Lines of code
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img src="https://img.icons8.com/bubbles/50/000000/instagram-new--v2.png" />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            381 followers
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Let's connect
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img src="https://img.icons8.com/?size=1x&id=yVehj759sK2y&format=png" />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            100+
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Basketball Wins
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
