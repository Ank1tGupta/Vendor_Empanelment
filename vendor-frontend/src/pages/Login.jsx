import { useState } from "react";
import api from "../api/axios";
import { setToken, getUserRole } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ Import jwtDecode to inspect token

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending credentials:", form);
    try {
      const res = await api.post("/login/", {
        username: form.username,
        password: form.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      );

      const token = res.data.access; // ✅ Get access token from response
      setToken(token); // Save token to localStorage

      // ✅ Debug: Log decoded token to see if role is present
      const decoded = jwtDecode(token);
      console.log("Decoded JWT Token:", decoded); // <- This is what you check!

      const role = decoded.role;
      console.log("✅ User Role:", role);
      navigate(role === "vendor" ? "/vendor/dashboard" : "/company/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
        <button type="submit" className="bg-green-600 text-white p-2 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
