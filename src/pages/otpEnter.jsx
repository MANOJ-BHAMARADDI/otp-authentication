import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OtpEnter = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const otpGenerated = useRef(false);

  useEffect(() => {
    if (!otpGenerated.current) {
      otpGenerated.current = true;
    }

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) clearInterval(countdown);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleSubmit = () => {
    const storedOtp = localStorage.getItem("otp");

    if (otp === storedOtp && timer > 0) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP. Please try again.");
      navigate("/");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/07vT2xk.png')" }}>
      {/* Header */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
        Analytics Dashboard
      </div>

      {/* Main Content */}
      <div className="container flex-grow flex justify-center items-center">
        <div className="card flex flex-col md:flex-row w-full max-w-4xl">
          {/* Left Section - OTP Input */}
          <div className="left-section md:w-1/2 p-4">
            <h2 className="heading">Enter Otp sent to Email</h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="input"
            />
            <button onClick={handleSubmit} className="btn">
              Validate
            </button>
            <p className="text-white mt-4">Time left: {timer}s</p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block border-l border-black-500"></div>

          {/* Right Section - Info */}
          <div className="right-section md:w-1/2 p-4 text-white flex justify-center items-center">
            <div className="text-center">
              Web Application with Analytics Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
        © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default OtpEnter;
