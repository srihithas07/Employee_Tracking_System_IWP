// ForgotPassword.js

import React, { useState } from "react";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOTP = () => {
    // Mock API call (simulating backend behavior)
    // In a real scenario, you would make an actual API call to request OTP
    if (email.trim() === "akshaj@gmail.com") {
      setMessage("OTP sent successfully.");
      setShowOTPInput(true);
    } else {
      setMessage("User not found. Please enter a valid email.");
    }
  };

  const handleVerifyOTP = () => {
    // Mock API call (simulating backend behavior)
    // In a real scenario, you would make an actual API call to verify the OTP
    if (otp === "123456") {
      setMessage("OTP verified successfully. Request has been sent to support.");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <p>Enter your email to receive a password reset OTP.</p>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>

      {showOTPInput && (
        <div>
          <p>Enter the OTP sent to your email:</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}

      <p>{message}</p>
    </div>
  );
}

export default ChangePassword;
