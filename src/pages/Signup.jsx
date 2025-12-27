import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Technician",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate("/");   // ⭐ BACK TO LOGIN
      } 
      else alert(data.message);

    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Create GearGuard Account</h2>

        <form onSubmit={handleSignup}>
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>

        <p>Already have an account? <Link to="/">Login</Link></p>

      </div>
    </div>
  );
};

export default Signup;
