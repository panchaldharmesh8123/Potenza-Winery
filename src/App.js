"use client";

import { useState, useEffect } from "react";
import "./App.css";
import {
  Wine,
  MapPin,
  Phone,
  Mail,
  Star,
  Truck,
  Award,
  Users,
  MessageCircle,
  ChevronDown,
  Play,
} from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeWine, setActiveWine] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    winePreference: "",
    quantity: "1",
    deliveryAddress: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `
🍷 *New Order Inquiry - Potenza Winery*

👤 *Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

🍾 *Order Details:*
Wine Preference: ${formData.winePreference || "Not specified"}
Quantity: ${formData.quantity} bottles
Delivery Address: ${formData.deliveryAddress}

💬 *Message:*
${formData.message}

Please provide pricing and delivery details. Thank you!
    `.trim();

    const whatsappUrl = `https://wa.me/919978530907?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      winePreference: "",
      quantity: "1",
      deliveryAddress: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const wines = [
    {
      name: "Dragon Fruit Wine",
      description:
        "Exotic and refreshing wine made from premium dragon fruits with delicate floral notes",
      image: require("./asset/imgi_2_product-11.jpg"),
      color: "dragon-fruit-gradient",
      price: "₹2,499",
      alcohol: "13.01% ABV",
    },
    {
      name: "Mango Wine",
      description:
        "Tropical delight crafted from the finest Indian mangoes with rich, fruity essence",
      image: require("./asset/imgi_6_product-15.jpg"),
      color: "mango-gradient",
      price: "₹2,299",
      alcohol: "12.50% ABV",
    },
    {
      name: "Pineapple Wine",
      description:
        "Sweet and tangy wine with authentic pineapple essence and tropical sophistication",
      image: require("./asset/imgi_4_product-13.jpg"),
      color: "pineapple-gradient",
      price: "₹2,399",
      alcohol: "9.10% ABV",
    },
  ];

  const handleWhatsAppOrder = (wineName) => {
    const message = `Hi Potenza Winery! I'm interested in ordering ${wineName}. Please provide more details about pricing and delivery.`;
    const whatsappUrl = `https://wa.me/919978530907?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppContact = () => {
    const message =
      "Hi Potenza Winery! I'd like to know more about your wine collection and delivery options across India.";
    const whatsappUrl = `https://wa.me/919978530907?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Award, label: "Premium Quality", value: "100%" },
    { icon: Truck, label: "Pan India Delivery", value: "28 States" },
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Star, label: "Customer Rating", value: "4.9/5" },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-brand">
              <img
                src={require("./asset/imgi_1_logo.png")}
                className="nav-icon"
                alt="Logo"
              />
              <span className="nav-title">Potenza Winery</span>
            </div>
            <div className="nav-links">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#wines" className="nav-link">
                Wines
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
            <button onClick={handleWhatsAppContact} className="whatsapp-btn">
              <MessageCircle className="btn-icon" />
              WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-background" />

        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          <div className="hero-badge">Premium Indian Fruit Wines</div>
          <h1 className="hero-title">
            <span className="hero-title-gradient">Potenza</span>
            <br />
            <span className="hero-subtitle">Winery</span>
          </h1>
          <p className="hero-description">
            Crafting exceptional fruit wines from Dragon Fruit, Mango &
            Pineapple. Delivering luxury across India with authentic flavors and
            premium quality that defines sophistication.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("wines")}
            >
              <Play className="btn-icon" />
              Explore Our Wines
            </button>
            <button className="btn btn-outline" onClick={handleWhatsAppContact}>
              <MessageCircle className="btn-icon" />
              Order on WhatsApp
            </button>
          </div>
        </div>

        {/* <div className="hero-scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div> */}
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Collection */}
      <section id="wines" className="wines-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Premium Collection</h2>
            <p className="section-description">
              Discover our signature fruit wines, each crafted with passion and
              precision using the finest ingredients from across India. Every
              bottle tells a story of tradition and innovation.
            </p>
          </div>

          <div className="wines-grid">
            {wines.map((wine, index) => (
              <div
                key={index}
                className={`wine-card ${wine.color}`}
                onClick={() => setActiveWine(index)}
              >
                <div className="wine-card-content">
                  <div className="wine-image-container">
                    <img
                      src={wine.image || "/placeholder.svg"}
                      alt={wine.name}
                      className="wine-image"
                    />
                    <div className="wine-badge">{wine.alcohol}</div>
                  </div>

                  <h3 className="wine-name">{wine.name}</h3>
                  <p className="wine-description">{wine.description}</p>

                  <div className="wine-details">
                    <span className="wine-price">{wine.price}</span>
                    <div className="wine-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>

                  <button
                    className="btn btn-whatsapp"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppOrder(wine.name);
                    }}
                  >
                    <MessageCircle className="btn-icon" />
                    Order on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">About Potenza Winery</h2>
              <p className="about-text">
                Established with a passion for creating exceptional fruit wines,
                Potenza Winery has become India's premier destination for exotic
                fruit wines. We specialize in three unique varieties that
                capture the essence of tropical India with unmatched
                sophistication.
              </p>
              <p className="about-text">
                Our commitment to quality and innovation has made us the trusted
                choice for wine enthusiasts across all 28 states of India. Each
                bottle represents our dedication to craftsmanship and authentic
                flavors that celebrate the rich heritage of Indian fruits.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-value">2023</div>
                  <div className="about-stat-label">Established</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-value">3</div>
                  <div className="about-stat-label">Signature Wines</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-container">
                <img
                  src={require("./asset/d.jpg")}
                  alt="Winery"
                  className="about-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              Ready to experience our premium fruit wines? Contact us for
              orders, inquiries, or partnership opportunities. We're here to
              serve you with excellence.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-title">Contact Information</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone className="icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+91 99785 30907</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail className="icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">info@potenzawinery.in</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin className="icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Address</div>
                    <div className="contact-value">
                      Survey No.2692/61 Palanpur –Udaipur Highway, Vill.Bhujela,
                      Ta.Pindwada, Rajsthan India.
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin className="icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Delivery</div>
                    <div className="contact-value">
                      All Over India - 28 States
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-whatsapp btn-full"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="btn-icon" />
                Chat on WhatsApp
              </button>
            </div>

            <div className="contact-form-container">
              <h3 className="form-title">Order Form - Send via WhatsApp</h3>
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Wine Preference</label>
                  <select
                    name="winePreference"
                    value={formData.winePreference}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select your preferred wine</option>
                    <option value="Dragon Fruit Wine">
                      Dragon Fruit Wine - ₹2,499
                    </option>
                    <option value="Mango Wine">Mango Wine - ₹2,299</option>
                    <option value="Pineapple Wine">
                      Pineapple Wine - ₹2,399
                    </option>
                    <option value="Mixed Pack">
                      Mixed Pack (All 3 varieties)
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Quantity</label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="1">1 Bottle</option>
                    <option value="2">2 Bottles</option>
                    <option value="3">3 Bottles</option>
                    <option value="6">6 Bottles (Half Case)</option>
                    <option value="12">12 Bottles (Full Case)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Delivery Address *</label>
                  <textarea
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your complete delivery address with pincode"
                    rows={3}
                    required
                    className="form-textarea"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any special requests or questions?"
                    rows={3}
                    className="form-textarea"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <MessageCircle className="btn-icon" />
                  Send Order via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <Wine className="footer-icon" />
                <span className="footer-title">Potenza Winery</span>
              </div>
              <p className="footer-description">
                Crafting premium fruit wines with passion and delivering luxury
                across India with unmatched quality and sophistication.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Our Wines</h4>
              <ul className="footer-links">
                <li>Dragon Fruit Wine</li>
                <li>Mango Wine</li>
                <li>Pineapple Wine</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#wines">Wines</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <button
                onClick={handleWhatsAppContact}
                className="btn btn-whatsapp"
              >
                <MessageCircle className="btn-icon" />
                WhatsApp
              </button>
              <p className="footer-note">
                Available for orders and inquiries across all Indian states.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Potenza Winery. All rights reserved. | Delivering premium
              fruit wines across India.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp">
        <button onClick={handleWhatsAppContact} className="floating-btn">
          <MessageCircle className="floating-icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
