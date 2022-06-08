import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/aboutus.css";

function Aboutus() {
  return (
    <section className="aboutus-section spad">
      <div className="container">
        <div className="aboutus-page-text">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <div className="section-title">
                <h2>What We Do</h2>
                <p>Medicall is an Application to find detailed information about drugs and can also provide recommendations for the nearest hospital.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-us">
                <h4>ABOUT US</h4>
                <p>
                  A drug side effect is any unwanted and harmful effect that occurs in the administration of drugs at normal doses in humans for the purpose of prevention, diagnosis or therapy, and modification of physiological function.
                  Currently, when compared to other countries in ASEAN, the profile Reporting side effects of Indonesian drugs is still low, This is because pharmacist awareness to report is still very low. The decision to use drugs always
                  contains considerations between: benefits and risks. The Institute of Medicine (IoM) reports that about 10% of used by the public has experienced errors and resulted in adverse drug reactions and 2% of these cases
                  underwent hospitalization. The report too estimates that 44,000 – 98,000 patients die each year as a result of treatment
                </p>
                <p>therefore it is very important for us to know the side effects of the drugs we take so as not to get adverse effects if we continue to take these drugs</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-quality">
                <h4>OUR TEAM</h4>
                <p>We are from C22-PS219 Bangkit 2022 Capstone Project Team. We are consist from 3 Machine Learning, 2 Android Developer team, and 1 Cloud Computing Team.</p>
                <ul>
                  <li>
                    <i className="fa fa-check-circle-o"></i>M7004G0264 - Zyrlirosa - Institut Teknologi Sepuluh Nopember
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>M2004F0270 - David Antonius S. - Institut Teknologi Sepuluh Nopember
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>M7004F0277 - Agnes Putri Susilowati - Institut Teknologi Sepuluh Nopember
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>A2291F2474 -Aria Rupawansyah - Universitas Pasundan
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>A2291F2475 - Freety Indriani Safitri - Universitas Pasundan
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>C2128F1590 - Ramandhika Raka K. A. - Politeknik Negeri Jakarta
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
