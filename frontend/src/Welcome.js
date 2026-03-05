import React from "react";
import "./Welcome.css";

const Welcome = () => {
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome, {username}!</h1>
        <p>You have successfully logged in.</p>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
