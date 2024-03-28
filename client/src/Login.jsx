// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'; // Import the CSS file with the styles

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3000/", { email, password })
      .then((result) => {
        console.log(result);
        if(result.data === "success"){
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container"> {/* Apply the same container class */}
      <div>
        <center>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}> {/* Use onSubmit instead of action */}
            <div className="form-group"> {/* Use the same form-group class */}
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="form-group"> {/* Use the same form-group class */}
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="signup-btn">Login</button> {/* Use the same signup-btn class */}
          </form>

          <div className="login-link">
            <p>OR</p>
            <Link to="/signup">Signup Page</Link>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Login;
