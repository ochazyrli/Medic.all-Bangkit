import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="Navbar">
        <div className="navcontainer">
          <Link to="/" className="navlogo" onClick={closeMobileMenu}>
            <img src="/images/smalllogo.png" alt="" />
            &nbsp;&nbsp;Medic.All
          </Link>
          <div className="micon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Aboutus" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hospilocate" className="nav-links" onClick={closeMobileMenu}>
                Hospital Locator
              </Link>
            </li>
            <li>
              <Link to="/Download" className="nav-links-mobile" onClick={closeMobileMenu}>
                Try it Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"> Try it Now</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
