import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // 🚨 VERY IMPORTANT

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token + role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);

        alert("Login successful!");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Is backend running?");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>GearGuard Login</h2>

        {/* 🚨 onSubmit is REQUIRED */}
        <form onSubmit={handleLogin}>
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
            Login
          </button>
          <p className="forgot-password">
  <a href="/forgot-password">Forgot password?</a>
</p>

        </form>

        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
