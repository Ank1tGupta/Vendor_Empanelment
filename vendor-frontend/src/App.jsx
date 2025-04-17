import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorDashboard from "./pages/VendorDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Onboarding/Login";
import Register from "./pages/Onboarding/Register";
import LandingPage from "./pages/Onboarding/Landing/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/vendor/dashboard"
          element={<PrivateRoute role="vendor"><VendorDashboard /></PrivateRoute>}
        />
        <Route
          path="/company/dashboard"
          element={<PrivateRoute role="company"><CompanyDashboard /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
