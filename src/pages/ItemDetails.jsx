import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchItem = async () => {
      try {
        setLoading(true);
        setError("");

        // OLD API
        const hotCollectionsAPI =
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections";

        // NEW ITEMS API
        const newItemsAPI =
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems";

        // Run BOTH APIs at the same time
        const [hotResponse, newResponse] = await Promise.all([
          fetch(hotCollectionsAPI),
          fetch(newItemsAPI),
        ]);

        if (!hotResponse.ok || !newResponse.ok) {
          throw new Error("Failed to fetch NFT data.");
        }

        const hotCollectionsData = await hotResponse.json();
        const newItemsData = await newResponse.json();

        // Combine results from BOTH APIs
        const allItems = [
          ...hotCollectionsData,
          ...newItemsData,
        ];

        // Find NFT from either API
        const foundItem = allItems.find(
          (nft) => String(nft.nftId) === String(id)
        );

        if (!foundItem) {
          setError("NFT not found.");
          setItem(null);
        } else {
          setItem(foundItem);
        }
      } catch (err) {
        console.error("Error fetching NFT:", err);
        setError("Unable to load NFT details.");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <h3>Loading NFT...</h3>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="container text-center py-5">
        <h3>{error || "NFT not found."}</h3>
        <Link to="/explore" className="btn btn-primary mt-3">
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <section className="item-details-section">
      <div className="container">
        <div className="row align-items-center">

          {/* NFT IMAGE */}
          <div className="col-lg-6">
            <div className="item-details-image">
              <img
                src={item.nftImage}
                alt={item.title}
                className="img-fluid"
              />
            </div>
          </div>

          {/* NFT DETAILS */}
          <div className="col-lg-6">
            <div className="item-details-content">

              <h1>{item.title}</h1>

              <p>
                Explore this NFT collection and discover more details
                about this digital artwork.
              </p>

              {/* VIEWS / LIKES */}
              <div className="d-flex gap-4 mb-4">
                <span>
                  👁 Views: {item.views ?? 0}
                </span>

                <span>
                  ❤️ Likes: {item.likes ?? 0}
                </span>
              </div>

              {/* OWNER / CREATOR */}
              <div className="d-flex align-items-center gap-3 mb-4">
                {item.authorImage && (
                  <img
                    src={item.authorImage}
                    alt="Creator"
                    width="50"
                    height="50"
                    className="rounded-circle"
                  />
                )}

                <div>
                  <small>Creator</small>
                  <h5 className="mb-0">NFT Creator</h5>
                </div>
              </div>

              {/* PRICE */}
              <div className="mb-4">
                <p className="mb-1">Current Price</p>

                <h3>
                  <img
                    src={EthImage}
                    alt="Ethereum"
                    width="25"
                    className="me-2"
                  />

                  {item.price ?? "N/A"} ETH
                </h3>
              </div>

              {/* NFT INFORMATION */}
              <div className="mb-4">
                <p>
                  <strong>NFT ID:</strong>{" "}
                  {item.nftId ?? "N/A"}
                </p>

                <p>
                  <strong>Code:</strong>{" "}
                  {item.code ?? item.id ?? "N/A"}
                </p>
              </div>

              <Link to="/explore" className="btn btn-primary">
                Explore More NFTs
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;