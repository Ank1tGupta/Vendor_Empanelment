import { useEffect, useState } from "react";
import api from "../api/axios";

const VendorDashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get("/vendors/me/");
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vendor Dashboard</h2>
      {profile ? (
        <div className="space-y-2">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Services:</strong> {profile.services.join(", ")}</p>
          <p><strong>Rating:</strong> {profile.rating}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default VendorDashboard;
