import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Download.css";
import "./css/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

function Download() {
  return (
    <section className="download-section spad">
      <div className="container">
        <div className="download-page-text">
          <div className="row">
            <div className="col-xl-9 col-lg-10 m-auto">
              <div className="section-title">
                <h2>Try Medic.All Now!</h2>
                <p>download link is below</p>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  <button className="btn--primary, btn--large">Download Here!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
