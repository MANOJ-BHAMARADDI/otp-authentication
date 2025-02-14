import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="heading">Welcome to the Dashboard</h2>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
