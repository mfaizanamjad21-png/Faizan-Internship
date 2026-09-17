import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Hot Collections API:", data);

        setCollections(data.slice(0, 4));
      } catch (err) {
        console.error("Error fetching Hot Collections:", err);
        setError("Unable to load collections.");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <section id="section-collections" className="no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Hot Collections</h2>
                <div className="small-border bg-color-2"></div>
                <p>Loading collections...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="section-collections" className="no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Hot Collections</h2>
                <div className="small-border bg-color-2"></div>
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {collections.map((collection) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
              key={collection.id}
            >
              <div className="nft_coll">

                <div className="nft_wrap">
                  <Link to={`/item-details/${collection.nftId}`}>
                    <img
                      src={collection.nftImage}
                      className="lazy img-fluid"
                      alt={collection.title}
                    />
                  </Link>
                </div>

                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img
                      className="lazy pp-coll"
                      src={collection.authorImage}
                      alt={`${collection.title} creator`}
                    />
                  </Link>

                  <i className="fa fa-check"></i>
                </div>

                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{collection.title}</h4>
                  </Link>

                  <span>ERC-{collection.code}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;