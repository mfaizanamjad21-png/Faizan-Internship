import React from "react";
import { Link } from "react-router-dom";

const BrowseByCategory = () => {
  const categories = [
    {
      icon: "fa fa-image",
      name: "Art",
    },
    {
      icon: "fa fa-music",
      name: "Music",
    },
    {
      icon: "fa fa-search",
      name: "Domain Names",
    },
    {
      icon: "fa fa-globe",
      name: "Virtual Worlds",
    },
    {
      icon: "fa fa-vcard",
      name: "Trading Cards",
    },
    {
      icon: "fa fa-th",
      name: "Collectibles",
    },
  ];

  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12">
            <div className="text-center anim-fade-up">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          {/* Categories */}
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="col-md-2 col-sm-4 col-6 mb-sm-30"
            >
              <Link
                to="/explore"
                className={`icon-box style-2 rounded anim-fade-up delay-${
                  (index % 6) + 1
                }`}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;