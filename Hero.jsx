import React, { useState, useEffect } from "react";

// Import images correctly
import img1 from "../assets/Frame 66.png";
import img2 from "../assets/Frame 65.png";
import img3 from "../assets/tennis-player-striking-ball 4.png";
import logo from "../assets/logo(1) 2 (1).png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use imported images
  const playerImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % playerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [playerImages.length]);

  return (
    <section className="hero-section">
      {/* EXACT Screenshot Background - Green Gradient */}
      <div 
        className="hero-bg"
        style={{
          background: 'linear-gradient(135deg, #1e3c1e 0%, #2d5a2d 30%, #1a3c1a 60%, #0f2a0f 85%, #08320f 100%)'
        }}
      />

      {/* LEFT SIDE - Exact styling */}
      <div className="hero-left">
        <nav className="hero-nav">
          <div className="nav-logo">
            <img src={logo} alt="PickleLex Logo" />
          </div>

          <div className="nav-menu">
            <span>Playing Rules</span>
            <span>|</span>
            <span>Scoring</span>
            <span>|</span>
            <span>Book Now</span>
          </div>
        </nav>

        <h1>
          Experience the Best <br />
          Pickleball Courts <br />
          <span style={{ color: '#00ff88' }}>in Town!</span>
        </h1>

        <button className="book-btn">
          Book Now
        </button>
      </div>

      {/* RIGHT IMAGE - Perfect positioning */}
      <div className="hero-right">
        <img
          key={currentImageIndex}
          src={playerImages[currentImageIndex]}
          alt="Pickleball Player"
          className="hero-player-img"
        />

        {/* DOTS - Exact positioning */}
        <div className="hero-dots">
          {playerImages.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
