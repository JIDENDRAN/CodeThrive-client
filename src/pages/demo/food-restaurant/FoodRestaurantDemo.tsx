import React, { useState, useEffect } from "react";
import "./FoodRestaurant.css";

// Import standard assets we have
import HeroImage from "../../../assets/restaurant_hero.png";
import ColorfulFood from "../../../assets/colorful_food_1.png";
import Bg1 from "../../../assets/bg1.png";
import Bg2 from "../../../assets/bg2.png";

// A colorful set of menu items
const menuItems = [
  { name: "Spicy Dragon Roll", price: "$18", desc: "Tempura shrimp, spicy tuna, avocado, topped with spicy mayo and eel sauce, served with fiery ginger." },
  { name: "Mango Tango Ceviche", price: "$16", desc: "Fresh mahi-mahi cured in lime, mixed with fresh mango, jalapeños, and vibrant red onions." },
  { name: "Rainbow Poke Bowl", price: "$22", desc: "A vibrant mix of salmon, tuna, edamame, seaweed salad, and colorful radish over sushi rice." },
  { name: "Sizzling Fajita Tower", price: "$25", desc: "A dramatic presentation of chicken, beef, or shrimp with colorful bell peppers and onions." },
  { name: "Truffle Mushroom Risotto", price: "$28", desc: "Creamy carnaroli rice with wild exotic mushrooms, finished with colorful microgreens." },
  { name: "Galaxy Macarons", price: "$12", desc: "A colorful assortment of freshly baked macarons filled with exotic fruit ganaches." },
];

const FoodRestaurantDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Menu" | "About" | "Gallery" | "Chefs" | "Reviews">("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="food-rest-container">
      {/* NAVBAR */}
      <nav className="food-rest-nav">
        <div className="food-rest-logo">
          Vibrant<span>Eats</span>
        </div>
        <div className="food-rest-tabs">
          <button 
            className={`food-rest-tab ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </button>
          <button 
            className={`food-rest-tab ${activeTab === "Menu" ? "active" : ""}`}
            onClick={() => setActiveTab("Menu")}
          >
            Menu
          </button>
          <button 
            className={`food-rest-tab ${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About Us
          </button>
          <button 
            className={`food-rest-tab ${activeTab === "Gallery" ? "active" : ""}`}
            onClick={() => setActiveTab("Gallery")}
          >
            Gallery
          </button>
          <button 
            className={`food-rest-tab ${activeTab === "Chefs" ? "active" : ""}`}
            onClick={() => setActiveTab("Chefs")}
          >
            Chefs
          </button>
          <button 
            className={`food-rest-tab ${activeTab === "Reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("Reviews")}
          >
            Reviews
          </button>
        </div>
        <button className="food-rest-btn-book">Book a Table</button>
      </nav>

      <div className="food-rest-content">
        {/* TAB CONTENT: HOME */}
        {activeTab === "Home" && (
          <section className="food-rest-home">
            <div className="food-rest-home-left">
              <h1 className="food-rest-home-title">
                Experience <span>Flavor</span> In Full Color
              </h1>
              <p className="food-rest-home-desc">
                Welcome to a vibrant culinary journey! Our chefs blend the freshest ingredients to bring you a spectacularly colorful fusion menu that's as beautiful as it is delicious.
              </p>
              <div className="food-rest-home-btns">
                <button className="food-rest-btn-primary" onClick={() => setActiveTab("Menu")}>View Menu</button>
                <button className="food-rest-btn-secondary" onClick={() => setActiveTab("About")}>Our Story</button>
              </div>
            </div>
            <div className="food-rest-home-right">
              <div className="food-screens-gallery">
                <div className="food-screen-main">
                  <img src={ColorfulFood} alt="Colorful Food Spread" className="food-rest-dish-img" />
                </div>
                <div className="food-screen-secondary">
                  <img src={Bg1} alt="Restaurant Interior" className="food-screen-floating-1" />
                  <img src={Bg2} alt="Menu Setup" className="food-screen-floating-2" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB CONTENT: MENU */}
        {activeTab === "Menu" && (
          <section className="food-rest-menu">
            <h2 className="food-rest-menu-title">Our Vibrant Menu</h2>
            <div className="food-rest-menu-grid">
              {menuItems.map((item, idx) => (
                <div key={idx} className="food-rest-menu-card">
                  <div className="food-rest-menu-price">{item.price}</div>
                  <h3 className="food-rest-menu-name">{item.name}</h3>
                  <p className="food-rest-menu-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB CONTENT: ABOUT */}
        {activeTab === "About" && (
          <section className="food-rest-about">
             <div className="food-rest-about-content">
              <h2>A Passion For Color & Taste</h2>
              <p>
                VibrantEats was founded with a simple philosophy: food should excite all the senses. We believe that a colorful plate is a healthy and joyous plate!
              </p>
              <p>
                Every day, we source the brightest, freshest produce from local farmers to craft dishes that look like a piece of art and taste like a celebration.
              </p>
            </div>
            <img src={HeroImage} alt="Restaurant Origin" className="food-rest-about-img" />
          </section>
        )}

        {/* TAB CONTENT: GALLERY */}
        {activeTab === "Gallery" && (
          <section className="food-rest-gallery">
            <h2 className="food-rest-menu-title">Culinary Masterpieces</h2>
            <div className="food-rest-gallery-grid">
              <div className="food-rest-gallery-item">
                <img src={ColorfulFood} alt="Gallery item 1" />
                <div className="gallery-overlay">Signature Sushi</div>
              </div>
              <div className="food-rest-gallery-item">
                <img src={HeroImage} alt="Gallery item 2" />
                <div className="gallery-overlay">Elegant Ambience</div>
              </div>
              <div className="food-rest-gallery-item">
                <img src={ColorfulFood} style={{filter: 'hue-rotate(90deg)'}} alt="Gallery item 3" />
                <div className="gallery-overlay">Exotic Flavors</div>
              </div>
              <div className="food-rest-gallery-item">
                <img src={ColorfulFood} style={{filter: 'hue-rotate(180deg)'}} alt="Gallery item 4" />
                <div className="gallery-overlay">Artistic Plating</div>
              </div>
            </div>
          </section>
        )}

        {/* TAB CONTENT: CHEFS */}
        {activeTab === "Chefs" && (
          <section className="food-rest-chefs">
            <h2 className="food-rest-menu-title">Meet Our Culinary Artists</h2>
            <div className="food-rest-chefs-grid">
              <div className="food-rest-chef-card">
                <div className="chef-avatar">👩‍🍳</div>
                <h3>Elena Rossi</h3>
                <p>Executive Chef</p>
                <span>Master of fusion cuisine with a 3-Michelin star background.</span>
              </div>
              <div className="food-rest-chef-card">
                <div className="chef-avatar">👨‍🍳</div>
                <h3>Kenji Sato</h3>
                <p>Sushi Artisan</p>
                <span>Brings 20+ years of traditional craft to modern plating.</span>
              </div>
              <div className="food-rest-chef-card">
                <div className="chef-avatar">👩‍🍳</div>
                <h3>Amelie Dupont</h3>
                <p>Pastry Chef</p>
                <span>Creates colorful, galaxy-inspired desserts.</span>
              </div>
            </div>
          </section>
        )}

        {/* TAB CONTENT: REVIEWS */}
        {activeTab === "Reviews" && (
          <section className="food-rest-reviews">
            <h2 className="food-rest-menu-title">What Our Guests Say</h2>
            <div className="food-rest-reviews-container">
              <div className="food-rest-review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Absolutely mind-blowing flavors. The presentation is so beautiful you almost don't want to eat it. A true culinary journey!"</p>
                <div className="review-author">- Sarah Jenkins</div>
              </div>
              <div className="food-rest-review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"The Best dining experience in the city. The ambient lighting mixed with the vibrant dishes creates a magical evening."</p>
                <div className="review-author">- Michael Chang</div>
              </div>
              <div className="food-rest-review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Outstanding service from start to finish. The Spicy Dragon Roll is the best I've ever had. Highly recommended!"</p>
                <div className="review-author">- Emma Watson</div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* FIXED FOOTER WITH COPYRIGHT */}
      <footer className="food-rest-footer">
        <div className="food-rest-footer-top">
          <div>
            <h4 className="food-rest-footer-h4">VibrantEats</h4>
            <p>123 Culinary Drive, Food City, FC 90210</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="food-rest-footer-h4">Opening Hours</h4>
            <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
            <p>Sat-Sun: 10:00 AM - 11:30 PM</p>
          </div>
        </div>

        <div className="food-rest-copyright">
          <p style={{ margin: 0, fontSize: "0.9rem" }}>© 2026 CodeThrive Infotech. All rights reserved.</p>
          <p style={{ margin: 0, color: "#f39c12", fontWeight: 700, letterSpacing: "1px" }}>Progress. Cultivate. Innovate.</p>
        </div>
      </footer>
    </div>
  );
};

export default FoodRestaurantDemo;
