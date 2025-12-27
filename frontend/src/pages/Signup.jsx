import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Technician",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // 🚨 VERY IMPORTANT

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! You can now login.");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error. Is backend running?");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create GearGuard Account</h2>

        {/* 🚨 onSubmit is REQUIRED */}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* 🚨 type="submit" is REQUIRED */}
          <button type="submit" className="btn-primary">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
