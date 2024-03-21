// eslint-disable-next-line no-unused-vars
import React, {  useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="login">
      <center>
        <h1>Login</h1>

        <form action="POST">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input type="submit" onClick={handleSubmit} />
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/signup">Signup Page</Link>
      </center>
    </div>
  );
}

export default Login;
