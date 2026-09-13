import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./animations.css";

// Animation component
function ScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    let observer;

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(
        "section, .feature-box, .nft_coll, .nft__item, .author_list, .icon-box, .item_info, .d_profile"
      );

      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      elements.forEach((element) => {
        element.classList.add("scroll-reveal");
        observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timer);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollAnimations />

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author" element={<Author />} />
        <Route path="/item-details" element={<ItemDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;