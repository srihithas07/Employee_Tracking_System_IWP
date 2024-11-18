// AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    // Simulating admin login without involving a backend route
    if (adminEmail === "admin@example.com" && adminPassword === "adminpassword") {
      setIsAdminAuthenticated(true);
      alert("Admin login successful");
      navigate("/view"); // Redirect to the View page
    } else {
      alert("Admin login failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Login</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="adminEmail">Admin Email:</label>
        <input
          id="adminEmail"
          style={styles.input}
          type="email"
          onChange={(e) => setAdminEmail(e.target.value)}
        />
        <label htmlFor="adminPassword">Admin Password:</label>
        <input
          type="password"
          style={styles.input}
          id="adminPassword"
          onChange={(e) => setAdminPassword(e.target.value)}
        />
        <button type="submit" style={styles.button} onClick={handleAdminLogin}>
          Admin Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginTop: "50px",
  },
  heading: {
    marginBottom: "20px",
    paddingLeft: "110px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AdminLogin;
