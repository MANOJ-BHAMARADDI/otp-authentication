import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem("otp", generatedOtp);
    alert(`Your OTP is: ${generatedOtp}`);

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
      navigate("/resend");
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleSubmit}>Verify OTP</button>
      <p>Time left: {timer}s</p>
    </div>
  );
};

export default Login;
