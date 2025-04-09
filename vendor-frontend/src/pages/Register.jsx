import { useState } from "react";
import api from "../api/axios";
import { setToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "vendor" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register/", form);
      setToken(res.data.token);
      navigate(form.role === "vendor" ? "/vendor/dashboard" : "/company/dashboard");
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full border p-2" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2" required />
        <select name="role" onChange={handleChange} className="w-full border p-2">
          <option value="vendor">Vendor</option>
          <option value="company">Company</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
