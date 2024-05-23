import React from 'react';
import './css/bootstrap.css';
import './css/styles.css';
import headerSoftwareApp from './images/header-software-app.png';

function LandingPage() {
  return (
    <div className="h-lvh bg-white">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
          <a className="navbar-brand logo-text page-scroll" href="/">
            PNUcloud
          </a>

          {/* <!-- Mobile Menu Toggle Button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars" />
            <span className="navbar-toggler-awesome fas fa-times" />
          </button>
          {/* <!-- end of mobile menu toggle button --> */}

          <div className="navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/main">
                  MAIN
                </a>
              </li>
            </ul>
            <span className="nav-item">
              <a className="btn-outline-sm" href="/login">
                LOG IN
              </a>
            </span>
          </div>
        </div>{' '}
        {/*  <!-- end of container --> */}
      </nav>{' '}
      {/* <!-- end of navbar --> */}
      {/* <!-- end of navigation --> */}
      {/* <!-- Header --> */}
      <header id="header" className="header">
        <div className="header-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-5">
                <div className="text-container">
                  <h1>프로젝트를 편리하게 배포해보기</h1>
                  <p className="p-large">
                    이 서비스는 배포에 어려움을 겪는 학생들을 대상으로
                    제작되었습니다.
                  </p>
                  <a className="btn-solid-lg page-scroll" href="/signup">
                    SIGN UP
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xl-7">
                <div className="image-container">
                  <div className="img-wrapper">
                    <img
                      className="img-fluid"
                      src={headerSoftwareApp}
                      alt="alternative"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <svg
        className="header-frame bg-white"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 310"
      >
        <defs>
          <style>{`.cls-1 { fill: #6297FF; }`}</style>
        </defs>
        <title>header-frame</title>
        <path
          className="cls-1"
          d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"
        />
      </svg>
    </div>
  );
}

export default LandingPage;
