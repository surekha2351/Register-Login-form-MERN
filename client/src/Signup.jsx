import  {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:3000/register',{name, email, password})
    .then(result => {console.log(result)
    navigate('/')
    })
    .catch(err=>console.log(err))
  }
  


  return (
    <div className="login">
      <center>
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
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

      <Link to="/">Login Page</Link>
      </center>
    </div>
  );
}

export default Signup;