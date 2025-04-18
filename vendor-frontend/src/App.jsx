import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import VendorDashboard from "./pages/VendorDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import PrivateRoute from "./components/PrivateRoute";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
        <Route
          path="/payment/:vendorId"
          element={
            <PrivateRoute role="company">
              <PaymentPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
