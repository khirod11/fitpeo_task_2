import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__left">
          <h1>DESIGN</h1>
          <h1>DECLARES</h1>
        </div>

        <div className="footer__center">
          <ul>
            <li>Contact</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer__right">
          <h3>Sign up to the D! Newsletter</h3>
          <input type="email" placeholder="Email:*" />
          <div className="footer__checkbox">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">
              I would like to be added to the Design Declares! newsletter and receive further updates.
            </label>
          </div>
          <a href="#">View our Privacy Policy</a>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Footer bottom placed below the main section */}
      <div className="footer__bottom">
        <p>
          This website has been built following low-carbon principles of web development and hosted using
          serverless computing, by only allocating energy when needed and on demand.{" "}
          <a href="#">Learn more about our carbon footprint</a>.
        </p>
        <p className="footer__credit">
          Empowered by <a href="#">Driftime®</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
