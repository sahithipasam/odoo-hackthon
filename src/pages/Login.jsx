import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);

        alert("Login successful!");

        navigate("/dashboard");   // ⭐ CORRECT
      } 
      else alert(data.message || "Login failed");

    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>GearGuard Login</h2>

        <form onSubmit={handleLogin}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit" className="btn-primary">Login</button>
        </form>

        <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>

      </div>
    </div>
  );
};

export default Login;
