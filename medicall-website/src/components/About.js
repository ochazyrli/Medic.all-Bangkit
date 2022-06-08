import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/About.css";
//import './css/bootstrap.min.css'

function About() {
  return (
    <section className="home-about spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-text">
              <h2>ABOUT MEDIC.ALL</h2>
              <p className="short-details">Medicall is an Application to find detailed information about drugs and can also provide recommendations for the nearest hospital.</p>
              <p className="long-details">
                There are now 10,000 prescription drugs and that number is growing. Moreover, several health centers provide medical drugs to us without a label or description of the drug. resulting in public ignorance of the side effects
                of the drugs they take.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/image2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
