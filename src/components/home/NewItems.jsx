import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems";

const Countdown = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!expiryDate) {
      setTimeLeft("");
      return;
    }

    const updateCountdown = () => {
      const difference = expiryDate - Date.now();

      if (difference <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (!expiryDate) {
    return null;
  }

  return <div className="de_countdown">{timeLeft}</div>;
};

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch NFT data");
        }

        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.error("Error fetching New Items:", error);
        setError("Unable to load new items.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {loading && (
            <div className="col-lg-12 text-center">
              <p>Loading...</p>
            </div>
          )}

          {error && (
            <div className="col-lg-12 text-center">
              <p>{error}</p>
            </div>
          )}

          {!loading &&
            !error &&
            items.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                key={item.id}
              >
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link
                      to="/author"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={`Creator ID: ${item.authorId}`}
                    >
                      <img
                        className="lazy"
                        src={item.authorImage}
                        alt={item.title}
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>

                  <Countdown expiryDate={item.expiryDate} />

                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>

                        <div className="nft__item_share">
                          <h4>Share</h4>

                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-facebook fa-lg"></i>
                          </a>

                          <a
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-twitter fa-lg"></i>
                          </a>

                          <a
                            href={`mailto:?subject=${encodeURIComponent(
                              item.title
                            )}&body=${encodeURIComponent(window.location.href)}`}
                          >
                            <i className="fa fa-envelope fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/item-details"
                      state={{ item }}
                    >
                      <img
                        src={item.nftImage}
                        className="lazy nft__item_preview"
                        alt={item.title}
                      />
                    </Link>
                  </div>

                  <div className="nft__item_info">
                    <Link
                      to="/item-details"
                      state={{ item }}
                    >
                      <h4>{item.title}</h4>
                    </Link>

                    <div className="nft__item_price">
                      {item.price} ETH
                    </div>

                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default NewItems;