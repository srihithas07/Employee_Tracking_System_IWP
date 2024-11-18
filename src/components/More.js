// src/components/More.js
import React, { useState } from "react";

function More() {
  const [isAdditionalContentVisible, setAdditionalContentVisibility] =
    useState(false);
  const [isFAQVisible, setFAQVisibility] = useState(false);
  const [isContactVisible, setContactVisibility] = useState(false);

  const toggleAdditionalContent = () => {
    setAdditionalContentVisibility(!isAdditionalContentVisible);
  };

  const toggleFAQVisibility = () => {
    setFAQVisibility(!isFAQVisible);
  };

  const toggleContactVisibility = () => {
    setContactVisibility(!isContactVisible);
  };

  const sectionStyle = {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#DDD0C8", // Set beige as the background color
    color: "#323232", // Set dark grey as the text color
    textAlign: "left", // Align text to the left
    margin: "15px",
  };

  const buttonStyle = {
    cursor: "pointer",
    padding: "8px",
    fontSize: "14px",
    marginRight: "10px",
    backgroundColor: "#8B4513", // Set brown as the button background color
    color: "#FFFFFF", // Set white as the button text color
    border: "none",
    borderRadius: "3px",
  };

  const listStyle = {
    paddingLeft: "20px", // Set left padding for unordered lists
  };

  return (
    <div style={sectionStyle}>
      <h2>More</h2>
      <p>
        In the "More" section, discover additional features and benefits of our
        Employee Time Tracking System. We continuously strive to enhance your
        experience and provide a comprehensive solution for all your employee
        management needs.
      </p>

      {/* Interactive Element: Toggle Additional Content */}
      <button style={buttonStyle} onClick={toggleAdditionalContent}>
        {isAdditionalContentVisible ? "Hide" : "Show"} Additional Content
      </button>

      {/* Additional Content Toggle */}
      {isAdditionalContentVisible && (
        <div>
          <h3>Benefits of Our System</h3>
          <ul style={listStyle}>
            <li>Efficient Time Management</li>
            <li>Accurate Attendance Tracking</li>
            <li>Overtime Calculation</li>
            <li>User-Friendly Interface</li>
            <li>Customizable Reporting</li>
          </ul>

          <p>
            These features contribute to improved productivity, streamlined
            workflows, and better decision-making for your business. Feel free
            to explore and leverage these benefits to enhance your employee
            management processes.
          </p>
        </div>
      )}

      {/* Interactive Element: Toggle FAQ Section */}
      <button style={buttonStyle} onClick={toggleFAQVisibility}>
        {isFAQVisible ? "Hide" : "Show"} Frequently Asked Questions
      </button>

      {/* FAQ Section Toggle */}
      {isFAQVisible && (
        <div>
          <h3>Frequently Asked Questions</h3>
          <ul style={listStyle}>
            <li>
              <strong>Q:</strong> How do I reset my password?
              <br />
              <strong>A:</strong> To reset your password, go to the login page
              and click on the "Forgot Password" link.
            </li>
            <li>
              <strong>Q:</strong> Is there a mobile app available?
              <br />
              <strong>A:</strong> Yes, we offer a mobile app for both iOS and
              Android platforms. You can download it from the respective app
              stores.
            </li>
            <li>
              <strong>Q:</strong> What support options are available?
              <br />
              <strong>A:</strong> We provide 24/7 customer support via email,
              live chat, and phone. Our support team is ready to assist you with
              any issues or questions you may have.
            </li>
            <li>
              <strong>Q:</strong> How can I integrate this system with other
              tools?
              <br />
              <strong>A:</strong> Our system supports integration with popular
              tools and platforms. Visit the integration section in your account
              settings for more information.
            </li>
            <li>
              <strong>Q:</strong> Can I customize the reports?
              <br />
              <strong>A:</strong> Yes, our system allows you to customize and
              generate various reports based on your specific requirements.
            </li>
            <li>
              <strong>Q:</strong> Is the system GDPR compliant?
              <br />
              <strong>A:</strong> Yes, we take data privacy seriously, and our
              system is designed to comply with GDPR regulations.
            </li>
            <li>
              <strong>Q:</strong> How often is the system updated?
              <br />
              <strong>A:</strong> We regularly update our system to introduce
              new features, improvements, and ensure security.
            </li>
            <li>
              <strong>Q:</strong> Are there any training resources available?
              <br />
              <strong>A:</strong> Yes, we provide training resources such as
              documentation and tutorials to help you make the most of our
              system.
            </li>
            {/* Add more FAQs and answers as needed */}
          </ul>
        </div>
      )}

      {/* Interactive Element: Toggle Contact Section */}
      <button style={buttonStyle} onClick={toggleContactVisibility}>
        {isContactVisible ? "Hide" : "Show"} Contact Information
      </button>

      {/* Contact Section Toggle */}
      {isContactVisible && (
        <div>
          <h3>Contact Information</h3>
          <p>
            For any inquiries or assistance, you can reach out to our support
            team:
          </p>
          <ul style={listStyle}>
            <li>Email: support@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Main Street, Cityville</li>
          </ul>
        </div>
      )}

      {/* Add more functionalities and interactive elements as needed */}
    </div>
  );
}

export default More;