// src/components/About.js
import React, { useState } from "react";

const About = () => {
  const [isTeamMembersVisible, setTeamMembersVisibility] = useState(false);
  const [isCompanyHistoryVisible, setCompanyHistoryVisibility] =
    useState(false);
  const [isFeedbackFormVisible, setFeedbackFormVisibility] = useState(false);
  const [isVisionVisible, setVisionVisibility] = useState(false);
  const [feedback, setFeedback] = useState("");

  const toggleVisibility = (visibilitySetter) => {
    visibilitySetter((prevVisibility) => !prevVisibility);
  };

  const submitFeedback = () => {
    // Implement feedback submission logic here
    console.log("Feedback submitted:", feedback);
    // You can send the feedback to a server, store it in state, or perform any desired action
  };

  const sectionStyle = {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#DDD0C8", // Set background color to beige
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

  const textareaStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    resize: "vertical",
  };

  const containerStyle = {
    backgroundColor: "#DDD0C8", // Set background color to beige
    color: "#000000", // Set text color to black
    padding: "20px",
    borderRadius: "10px",
    margin: "15px",
  };

  return (
    <div style={containerStyle}>
      <h2>About Us</h2>
      <p>
        Welcome to Team 83, the driving force behind the Employee Time Tracking
        System. We are passionate about revolutionizing the way businesses
        manage and monitor employee working hours, ensuring efficiency and
        accuracy in workforce management.
      </p>
      <p>
        Our dedicated team members include Srihitha and Chaitanya, each contributing their unique skills and expertise to create a
        seamless and reliable time tracking solution. Together, we strive to
        simplify the complexities of employee time management and enhance
        productivity for businesses of all sizes.
      </p>

      {/* Interactive Element: Toggle Team Members */}
      <button
        style={buttonStyle}
        onClick={() => toggleVisibility(setTeamMembersVisibility)}
      >
        {isTeamMembersVisible ? "Hide" : "Show"} Team Members
      </button>

      {/* Team Members Toggle */}
      {isTeamMembersVisible && (
        <div style={sectionStyle}>
          <p>
            Meet our dedicated team members who work diligently to make this
            system possible:
          </p>
          <ul>
            <li>Srihitha</li>
            <li>Chaitanya</li>
          </ul>
          {/* Add team member details or images */}
        </div>
      )}

      {/* Interactive Element: Toggle Company History */}
      <button
        style={buttonStyle}
        onClick={() => toggleVisibility(setCompanyHistoryVisibility)}
      >
        {isCompanyHistoryVisible ? "Hide" : "Show"} Company History
      </button>

      {/* Company History Toggle */}
      {isCompanyHistoryVisible && (
        <div style={sectionStyle}>
          <p>
            Our journey began in 2023 with a vision to simplify employee time
            management for businesses. Over the years, we have evolved and
            expanded our system to cater to the diverse needs of organizations
            worldwide. Today, we proudly serve thousands of businesses, helping
            them streamline their workforce management processes.
          </p>
          {/* Add more company history details or milestones */}
        </div>
      )}

      {/* Interactive Element: Toggle Feedback Form */}
      <button
        style={buttonStyle}
        onClick={() => toggleVisibility(setFeedbackFormVisibility)}
      >
        {isFeedbackFormVisible ? "Hide" : "Give Feedback"}
      </button>

      {/* Feedback Form Toggle */}
      {isFeedbackFormVisible && (
        <div style={sectionStyle}>
          <p>
            We'd love to hear your thoughts! Please provide your feedback below:
          </p>
          <textarea
            style={textareaStyle}
            placeholder="Enter your feedback..."
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button style={buttonStyle} onClick={submitFeedback}>
            Submit Feedback
          </button>
        </div>
      )}

      {/* Interactive Element: Toggle Our Vision */}
      <button
        style={buttonStyle}
        onClick={() => toggleVisibility(setVisionVisibility)}
      >
        {isVisionVisible ? "Hide" : "Show"} Our Vision
      </button>

      {/* Our Vision Toggle */}
      {isVisionVisible && (
        <div style={sectionStyle}>
          <p>
            Our vision is to create a world where employee time management is
            seamless and efficient, enabling businesses to focus on their core
            activities. We aim to continuously innovate and provide solutions
            that simplify workforce management processes for organizations of
            all sizes.
          </p>
          {/* Add more vision details or goals */}
        </div>
      )}

      <p>
        Explore our system's features, including punch-in and punch-out
        recording, working hours calculation, overtime tracking, and more.
        Navigate through the website to discover the full range of
        functionalities and reach out to our team for any inquiries.
      </p>
    </div>
  );
};

export default About;