import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const NewItems = () => {
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
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="text-center anim-fade-up">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {/* NFT Carousel */}
          <div className="col-lg-12">
            <Slider {...settings}>
              {new Array(4).fill(0).map((_, index) => (
                <div
                  key={index}
                  className={`px-2 anim-fade-up delay-${
                    (index % 6) + 1
                  }`}
                >
                  <div className="nft__item">
                    {/* Creator */}
                    <div className="author_list_pp">
                      <Link
                        to="/author"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Creator: Monica Lucas"
                      >
                        <img
                          className="lazy"
                          src={AuthorImage}
                          alt="Monica Lucas"
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>

                    {/* Countdown */}
                    <div className="de_countdown">
                      5h 30m 32s
                    </div>

                    {/* NFT Image */}
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button type="button">Buy Now</button>

                          {/* Share */}
                          <div className="nft__item_share">
                            <h4>Share</h4>

                            <a
                              href="#facebook"
                              aria-label="Share on Facebook"
                            >
                              <i className="fa fa-facebook fa-lg"></i>
                            </a>

                            <a
                              href="#twitter"
                              aria-label="Share on Twitter"
                            >
                              <i className="fa fa-twitter fa-lg"></i>
                            </a>

                            <a
                              href="#email"
                              aria-label="Share by Email"
                            >
                              <i className="fa fa-envelope fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <Link to="/item-details">
                        <img
                          src={nftImage}
                          className="lazy nft__item_preview"
                          alt="Pinky Ocean NFT"
                        />
                      </Link>
                    </div>

                    {/* NFT Information */}
                    <div className="nft__item_info">
                      <Link to="/item-details">
                        <h4>Pinky Ocean</h4>
                      </Link>

                      <div className="nft__item_price">
                        3.08 ETH
                      </div>

                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>69</span>
                      </div>
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

export default NewItems;