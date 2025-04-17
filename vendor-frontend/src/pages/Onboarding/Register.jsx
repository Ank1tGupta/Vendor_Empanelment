import { useState } from "react";
import api from "../../api/axios";
import { setToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // optional icons

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "vendor",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register/", form);
      setToken(res.data.token);
      navigate(
        form.role === "vendor" ? "/vendor/dashboard" : "/company/dashboard"
      );
    } catch (err) {
      alert("Registration failed.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-[30%] md:w-[50%] sm:w-[80%] shadow-lg rounded-lg p-4 bg-blue-100/20">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl text-gray-800">
          Let's Start
          <span className="text-[#0055A4] animate-bounce inline-block text-4xl font-bold">
            .
          </span>
        </h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Have an Account?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            Sign In
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full rounded-lg bg-white border px-3 py-2 border-gray-200 shadow-md focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-lg bg-white border px-3 py-2 border-gray-200 shadow-md focus:outline-none"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full rounded-lg bg-white border px-3 py-2 border-gray-200 shadow-md pr-10 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-2.5 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <select
            name="role"
            onChange={handleChange}
            className="w-full rounded-lg bg-white border px-3 py-2 border-gray-200 shadow-md focus:outline-none"
          >
            <option value="vendor">Vendor</option>
            <option value="company">Company</option>
          </select>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#2c3e50] text-white p-2 w-md rounded-full hover:shadow-lg cursor-pointer hover:-translate-y-1 transition-all duration-200 mt-15"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
