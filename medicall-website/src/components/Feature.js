import React, { Component } from "react";
import "./css/Feature.css";

function Feature() {
  return (
    <section className="chooseus-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>what are the features of Medic.All</h2>
              <h3>Here is the feature of Medic.All</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="choose-item">
              <h2>ME-Drugs</h2>
              <p>Only using camera, you can get the details of drugs</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="choose-item">
              <h2>ME-In</h2>
              <p>Get a recommend about nearest Hospital</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="choose-item">
              <h2>ME-Chat</h2>
              <p>You can get consultation with a doctor via chat</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="choose-item">
              <h2>ME-Record</h2>
              <p>Get a history of your medical record with details of indication and previous medical prescriptions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
