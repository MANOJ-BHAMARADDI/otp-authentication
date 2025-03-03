import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleValidate = () => {
    if (email && email.includes("@")) {
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      localStorage.setItem("otp", generatedOtp);
      alert(`Your OTP is: ${generatedOtp}`);
      navigate("/otp-enter");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/07vT2xk.png')" }}>
      <div className="glass-effect absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold p-2 rounded">
        Analytics Dashboard
      </div>
      <div className="container flex-grow flex justify-center items-center">
        <div className="card flex flex-col md:flex-row w-full max-w-4xl">
          {/* Left Section - Sign In */}
          <div className="left-section md:w-1/2 p-4">
            <h2 className="heading">Sign In</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="input"
            />
            <button onClick={handleValidate} className="btn">
              Send Otp
            </button>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block border-l border-gray"></div>

          {/* Right Section - Info */}
          <div className="right-section md:w-1/2 p-4 text-white flex justify-center items-center">
            <div className="text-center">
              Web Application with Analytics Dashboard
            </div>
          </div>
        </div>
      </div>
      <div className="glass-effect absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm p-2 rounded">
        © 2025, All Rights Reserved.
      </div>
    </div>
  );
};

export default Login;
