import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* Subheader */}
        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <h1 data-aos="fade-down">Explore Cars</h1>
            </div>
          </div>
        </section>

        {/* Filters + Search + Sorting */}
        <section aria-label="section">
          <div className="container">
            <div className="row mb-4" data-aos="fade-up">
              
              {/* Search */}
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search cars..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Brand Filter */}
              <div className="col-md-4 mb-3">
                <select
                  className="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">All Brands</option>
                  <option value="Honda">Honda</option>
                  <option value="Toyota">Toyota</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedes</option>
                </select>
              </div>

              {/* Year Filter */}
              <div className="col-md-4 mb-3">
                <select
                  className="form-control"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>

              {/* Sorting */}
              <div className="col-md-4 mb-3">
                <select
                  className="form-control"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="">Sort</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Items */}
            <div className="row" data-aos="fade-up">
              <ExploreItems
                search={search}
                brand={brand}
                year={year}
                sort={sort}
                page={page}
              />
            </div>

            {/* Pagination */}
            <div className="row mt-4" data-aos="fade-up">
              <div className="col-md-12 text-center">
                <button
                  className="btn btn-primary mx-2"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Prev
                </button>

                <span className="mx-2">Page {page}</span>

                <button
                  className="btn btn-primary mx-2"
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;