import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const HotCollections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="text-center anim-fade-up">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {/* Collections Carousel */}
          <div className="col-lg-12">
            <Slider {...settings}>
              {new Array(4).fill(0).map((_, index) => (
                <div
                  key={index}
                  className={`px-2 anim-fade-up delay-${
                    (index % 6) + 1
                  }`}
                >
                  <div className="nft_coll">
                    {/* Collection Image */}
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={nftImage}
                          className="lazy img-fluid"
                          alt="Pinky Ocean NFT"
                        />
                      </Link>
                    </div>

                    {/* Creator */}
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={AuthorImage}
                          alt="Monica Lucas"
                        />
                      </Link>

                      <i className="fa fa-check"></i>
                    </div>

                    {/* Collection Information */}
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>Pinky Ocean</h4>
                      </Link>

                      <span>ERC-192</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;