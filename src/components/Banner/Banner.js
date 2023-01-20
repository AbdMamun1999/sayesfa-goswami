import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div className="empty-section"></div>
      <div className="banner">
        <div className="container">
          <div className=" content-section">
            <h2>Growth, healing and hope</h2>
            <p>From the comfort of your own space</p>
            <p>Individual therapy for adults</p>
            <div className="w-100 text-center">
              <button type="" className="banner-button">
                Book session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
