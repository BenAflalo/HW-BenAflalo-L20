import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (password) => {
    if (password !== "12345") {
      return alert("Wrong password");
    }
    navigate("/controlpanel");
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login(password)}>Enter</button>
    </div>
  );
};

export default LoginPage;
