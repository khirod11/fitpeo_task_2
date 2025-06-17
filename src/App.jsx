import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import "./App.css";
import BreakdownSection from "./components/BreakdownSection";
import DonateSection from "./components/DonateSection";
import ActsOfEmergency from "./components/ActsOfEmergency";
import DeclareEmergencyForm from "./components/DeclareEmergencyForm";
import LatestSection from "./components/LatestSection";
import NewsletterToolkit from "./components/NewsletterToolkit";
import Footer from "./components/Footer";
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setShowLinks(true), 800); 
    } else {
      setShowLinks(false);
      setTimeout(() => setIsMenuOpen(false), 400); 
    }
  };

  return (
    <div className="App">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <HeroSection />
      <BreakdownSection />
      <DonateSection />
      <ActsOfEmergency />
      <DeclareEmergencyForm />
      <LatestSection />
      <NewsletterToolkit />
      <Footer />


      {isMenuOpen && (
        <div className="blur-backdrop" onClick={handleMenuClick} />
      )}
      <div className={`sticky-buttons ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-btn" onClick={handleMenuClick}>
          <span className="label">Menu</span>
          <span className="plus">{isMenuOpen ? "x" : "+"}</span>
        </div>
        {showLinks && (
          <div className="menu-links">
            <a href="#home">
              <FaHome style={{ marginRight: "0.5rem" }} /> Home
            </a>
            <a href="#about">
              <FaInfoCircle style={{ marginRight: "0.5rem" }} /> About
            </a>
            <a href="#latest">
              <FaNewspaper style={{ marginRight: "0.5rem" }} /> Latest
            </a>
            <a href="#contact">
              <FaEnvelope style={{ marginRight: "0.5rem" }} /> Contact
            </a>
            <a href="#chapters">
              <FaGlobe style={{ marginRight: "0.5rem" }} /> Choose Global
              Chapter
            </a>
          </div>
        )}
        {isMenuOpen && <div className="menu-divider" />}
        <div className="declare-btn">Declare Now</div>
      </div>
    </div>
  );
}

export default App;
