import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{
        background: `url(${backgroundImage}) bottom / cover`,
      }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">

            {/* Hero Content */}
            <div className="col-md-6">
              <div className="spacer-single"></div>

              <div className="anim-fade-left">
                <h6 className="anim-fade-down delay-1">
                  <span className="text-uppercase id-color-2">
                    Ultraverse Market
                  </span>
                </h6>

                <div className="spacer-10"></div>

                <h1 className="anim-fade-left delay-2">
                  Create, sell or collect digital items.
                </h1>

                <p className="lead anim-fade-left delay-3">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable
                </p>

                <div className="spacer-10"></div>

                <div className="anim-fade-up delay-4">
                  <Link className="btn-main lead" to="/explore">
                    Explore
                  </Link>
                </div>
              </div>

              <div className="mb-sm-30"></div>
            </div>

            {/* NFT Image */}
            <div className="col-md-6 xs-hide">
              <div className="anim-fade-right delay-3">
                <img
                  src={NFT}
                  className="lazy img-fluid hero-nft-animation"
                  alt="Ultraverse NFT"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;