import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-gray-900" style={{ backgroundImage: "url('https://i.imgur.com/07vT2xk.png')" }}>
      <button
        onClick={handleLogout}
        className="btn absolute top-2.5 right-4"
      >
        Logout
      </button>
      <div className="flex justify-center items-center h-full">
        <img
          alt="Dashboard"
          className="w-full h-full object-cover"
          onContextMenu={handleContextMenu}
        />
      </div>
    </div>
  );
};

export default Dashboard;
