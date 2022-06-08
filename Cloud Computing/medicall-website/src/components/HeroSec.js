import React from "react";
import { Button } from "./Button";
import "./css/HeroSec.css";
import "./css/App.css";

function HeroSec() {
  return (
    <div className="hero-container">
      <video src="/videos/video2.mp4" autoPlay loop muted />
      <h1> MEDIC.ALL </h1>
      <p> Medic For All </p>
      <div className="hero-btns"></div>
    </div>
  );
}

export default HeroSec;
