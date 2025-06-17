import React, { useState, useEffect } from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [showRightContent, setShowRightContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFullTitle(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setShowRightContent(true);
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero__left">
        {!showFullTitle ? (
          <span className="d-bang-wrapper">
            <span className="d-letter">D</span>
            <span className="bang-letter">!</span>
          </span>
        ) : (
          <div className="full-title">
            <span className="big-text slide-up word1">DESIGN</span>
            <br />
            <span className="big-text slide-up word2">DECLARES</span>
            <br />
            <span className="big-text slide-up word3 highlight">UK</span>
          </div>
        )}
      </div>

      <div className={`hero__right ${showRightContent ? "show" : ""}`}>
        <div className="hero-right-desc">
          Design Declares is a growing group of designers, design studios,
          agencies and institutions here to declare a climate and ecological
          emergency. As part of the global declaration movement, we commit to
          harnessing the tools of our industry to reimagine, rebuild and heal
          our world.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
