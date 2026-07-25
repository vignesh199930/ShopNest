import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
 
  console.log(email);
  console.log(password);
  
  
  const response = await fetch("http://localhost:8081/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

const token = await response.text();

if (token !== "Invalid Email or Password") {

   
    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("email", email);


    alert("Login Success");
    navigate("/");

} else {

    alert("Invalid Email or Password");
}
};

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-4 shadow">

        <h2 className="text-center mb-4">Login</h2>

        <input
        type="email"
        className="form-control mb-3"
       placeholder="Email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />

        <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
         value={password}
        onChange={(e) => setPassword(e.target.value)}
         />

        <Link to='/forgot-password'>
        Forgot Password?    
        </Link>

        <button
         className="btn btn-primary w-100"
        onClick={handleLogin}
        >
        Sign In
      </button>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <a href="/register" className="text-decoration-none">
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;