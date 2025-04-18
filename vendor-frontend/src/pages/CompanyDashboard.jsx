import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const CompanyDashboard = () => {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendors = async () => {
      const res = await api.get("/vendors/");
      setVendors(res.data);
    };
    fetchVendors();
  }, []);

  const hireVendor = async (vendorId) => {
    const res = await api.post(`/hire/${vendorId}/`);
    alert("Vendor hired!");
    // optionally redirect to payment
    navigate(`/payment/${vendorId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Company Dashboard</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((v) => (
          <div key={v.id} className="p-4 border rounded-xl shadow-md space-y-2">
            <h3 className="text-lg font-semibold">{v.name}</h3>
            <p>Services: {v.services.join(", ")}</p>
            <p>Rating: {v.rating}</p>
            <button
              onClick={() => hireVendor(v.id)}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Hire
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboard;
