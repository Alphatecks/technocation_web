import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null);

    const studentLoginData = { email, password };

    fetch("https://api.technocation.space/apis/auth/login_student.php", {
      method: "POST",
      //   headers:{"Content-Type": "application/json" },
      body: JSON.stringify(studentLoginData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        navigate("/dashboard");
        // Handle any other logic based on the response here
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again.");
        console.error("Error:", error);
      });
  };
  // for post

  return (
    <div>
      <div className="form-wrapper">
        {/* login form */}
        <form action="">
          <div id="login-form" className="login-form">
            <h2>Login</h2>
            <div />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn purple-btn"
              onClick={handleLoginSubmit}
            >
              Login
            </button>
            <p className="login-text">
              don't have an account ?{" "}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
