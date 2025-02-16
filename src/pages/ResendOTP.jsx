import React from "react";
import { useNavigate } from "react-router-dom";

const ResendOTP = () => {
  const navigate = useNavigate();

  const handleResend = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("otp", newOtp);
    alert(`Your new OTP is: ${newOtp}`);
    navigate("/otp-enter");
  };

  const handleBack = () => {
    navigate("/previous-page");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">OTP Expired or Incorrect</h2>
      <button onClick={handleResend} className="btn mb-2">
        Resend OTP
      </button>
      <button onClick={handleBack} className="btn">
        Back
      </button>
    </div>
  );
};

export default ResendOTP;
