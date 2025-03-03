import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OtpEnter = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [resendEnabled, setResendEnabled] = useState(false);
  const navigate = useNavigate();
  const countdownRef = useRef(null);

  useEffect(() => {
    startCountdown();

    return () => clearInterval(countdownRef.current);
  }, []);

  const startCountdown = () => {
    clearInterval(countdownRef.current);
    setTimer(30); // Reset timer to 30 seconds
    countdownRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdownRef.current);
          setResendEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    const storedOtp = localStorage.getItem("otp");

    if (otp === storedOtp && timer > 0) {
      navigate("/dashboard");
    } else {
      alert("Invalid OTP. Please try again.");
      setOtp(""); // Clear the input field
      setResendEnabled(true);
      startCountdown(); // Restart the countdown
    }
  };

  const handleResendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("otp", newOtp);
    alert(`Your new OTP is: ${newOtp}`);
    setOtp(""); // Clear the input field
    setResendEnabled(false);
    startCountdown(); // Restart the countdown
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/07vT2xk.png')" }}>
      {/* Header */}
      <div className="glass-effect absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold p-2 rounded">
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
            <button
              onClick={handleResendOtp}
              className="btn mt-2"
              disabled={!resendEnabled}
            >
              Resend OTP
            </button>
            <p className="text-white mt-4">Time left: {timer}s</p>
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

      {/* Footer */}
      <div className="glass-effect absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm p-2 rounded">
        © 2025, All Rights Reserved.
      </div>
    </div>
  );
};

export default OtpEnter;
