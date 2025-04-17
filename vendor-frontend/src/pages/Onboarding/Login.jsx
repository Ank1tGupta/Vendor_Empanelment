import { useState } from "react";
import api from "../../api/axios";
import { setToken, getUserRole } from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LoginModal = ({ show, onClose }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  if (!show) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login/", form);
      setToken(res.data.token);
      const role = getUserRole();
      onClose(); // close modal on success
      navigate(role === "vendor" ? "/vendor/dashboard" : "/company/dashboard");
    } catch (err) {
      alert("Login failed.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-[90%]   sm:w-[400px] bg-blue-100/20 rounded-lg bg-white shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
        >
          &times;
        </button>
        <h1 className="text-xl font-semibold sm:text-2xl text-gray-800">
          Welcome Back
          <span className="text-[#0055A4] animate-bounce inline-block text-4xl font-bold">
            .
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username..."
              onChange={handleChange}
              className="w-full mt-2 rounded-lg bg-white border px-3 py-2 border-gray-200 shadow-md focus:ring-none focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password..."
              onChange={handleChange}
              className="w-full mt-2 rounded-lg border bg-white px-3 py-2 border-gray-200 shadow-md pr-10 focus:ring-none focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-2.5 text-gray-500 focus:ring-none focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-[#0055A4] hover:text-[#0055a494] font-medium transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-[#2c3e50] text-white p-2 w-full rounded-full hover:shadow-lg cursor-pointer hover:-translate-y-1 transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
