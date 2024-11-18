// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.png', 'image6.png']; // Add more image paths as needed
  const publicUrl = process.env.PUBLIC_URL;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextImage]);

  const styles = {
    container: {
      maxWidth: '1000px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginTop: '50px',
      textAlign: 'center',
      background: '#f8f9fa',
    },
    paragraph: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    slideshowContainer: {
      position: 'relative',
      maxWidth: '1500px',
      margin: 'auto',
      overflow: 'hidden',
    },
    slideshowImage: {
      width: '100%',
      height: '500px',
      borderRadius: '8px',
      objectFit: 'cover',
    },
    slideshowButtons: {
      position: 'absolute',
      top: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      transform: 'translateY(-50%)',
    },
    button: {
      background: '#28a745',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: 'white',
      padding: '5px 10px',
    },
    footer: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    socialMedia: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    socialIcon: {
      fontSize: '24px',
      margin: '0 10px',
      color: '#007bff',
      cursor: 'pointer',
    },
    footerLinks: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    link: {
      margin: '0 10px',
      textDecoration: 'none',
      color: '#007bff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    contactInfo: {
      marginBottom: '20px',
    },
    featuresContainer: {
      display: 'flex',
      justifyContent: 'center', // Center the features horizontally
      flexWrap: 'wrap',
      marginBottom: '20px',
    },
  
    feature: {
      textAlign: 'center',
      maxWidth: '300px',
      margin: '20px',
      flex: '1', // Make each feature take equal width
    },
  
  };
  const features = [
    {
      icon: 'fas fa-clock',
      title: 'Time Tracking',
      description: 'Efficiently track working hours and attendance with our automated system.',
      color: '#4CAF50', // Green
    },
    {
      icon: 'fas fa-users',
      title: 'Employee Management',
      description: 'Manage your workforce seamlessly and streamline your HR processes.',
      color: '#2196F3', // Blue
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Analytics',
      description: 'Access insightful analytics to improve productivity and performance.',
      color: '#FFC107', // Yellow
    },
  ];


  return (
    <div>
      <div style={styles.container}>
        <h2>Welcome to the Employee Time Tracking System!</h2>
        <p style={styles.paragraph}>
          Efficiently manage your employees' working hours with our user-friendly and reliable
          time tracking system. Say goodbye to manual attendance tracking and hello to automated,
          accurate, and hassle-free employee management.
        </p>
        <div style={styles.slideshowContainer}>
          <img
            src={`${publicUrl}/images/${images[currentImageIndex]}`}
            alt={`Slideshow ${currentImageIndex + 1}`}
            style={styles.slideshowImage}
          />
          <div style={styles.slideshowButtons}>
            <button onClick={prevImage} style={styles.button}>{'<'}</button>
            <button onClick={nextImage} style={styles.button}>{'>'}</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.container}>
        <h2>Key Features</h2>
        <div style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <div key={index} style={styles.feature}>
              <i className={feature.icon} style={{ fontSize: '48px', color: feature.color }}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <div style={styles.socialMedia}>
          {/* Social Media Icons */}
          <i className="fab fa-facebook" style={styles.socialIcon}></i>
          <i className="fab fa-twitter" style={styles.socialIcon}></i>
          <i className="fab fa-linkedin" style={styles.socialIcon}></i>
        </div>
        
        {/* Footer Links */}
        <div style={styles.footerLinks}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/signin" style={styles.link}>
            Sign In
          </Link>
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/more" style={styles.link}>
            More
          </Link>
        </div>

        {/* Contact Information */}
        <div style={styles.contactInfo}>
          <p>123 Main Street, Cityville, State, 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: abcd@gmail.com</p>
        </div>

        

      
      </div>
    </div>
  );
};

export default Home;
