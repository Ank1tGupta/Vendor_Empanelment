import { useState } from "react";
import api from "../api/axios";
import { setToken, getUserRole } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login/", form);
      setToken(res.data.token);
      const role = getUserRole();
      navigate(role === "vendor" ? "/vendor/dashboard" : "/company/dashboard");
    } catch (err) {
      alert("Login failed.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="username" name="username" placeholder="username" onChange={handleChange} className="w-full border p-2" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2" required />
        <button type="submit" className="bg-green-600 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
