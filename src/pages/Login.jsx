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
    <div>
      <h2>Enter Email</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleValidate}>Validate</button>
    </div>
  );
};

export default Login;
