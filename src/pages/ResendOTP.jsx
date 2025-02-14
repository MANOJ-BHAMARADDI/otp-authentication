import React from "react";
import { useNavigate } from "react-router-dom";

const ResendOTP = () => {
  const navigate = useNavigate();

  const handleResend = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>OTP Expired or Incorrect</h2>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};

export default ResendOTP;
