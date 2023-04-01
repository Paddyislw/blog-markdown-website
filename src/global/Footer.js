import React from "react";
import "./Layout.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <h2>PennyPot</h2>
        <p>
          Join the revolution and see how easy <br /> Middle makes home loans
        </p>
      </div>
      <div className="footerRightContainer">
        <div>
          <h3>Company</h3>
          <p>Contact</p>
        </div>
        <div>
          <h3>Who we help</h3>
          <p>Customers</p>
          <p>Brokers</p>
          <p>Lenders</p>
        </div>
        <div>
          <h3>Follow Us On</h3>
          <p>Social Media Items</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
