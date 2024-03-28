import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="signup-container">
      <div>
        <center>
          <h1>Signup</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="signup-btn">Signup</button>
          </form>

          <div className="login-link">
            <p>OR</p>
            <Link to="/">Login Page</Link>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Signup;
