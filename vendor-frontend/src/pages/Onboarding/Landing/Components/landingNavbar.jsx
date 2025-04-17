import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../Login";

const LandingNavbar = () => {
  const navigate = useNavigate();

  const [isLoginModalopen, setIsLoginModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsLoginModalOpen(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    "home",
    "how-it-works",
    "for-vendors",
    "for-companies",
    "features",
    "pricing",
    "faq",
    "contact",
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="mx-auto px-20 py-3 flex flex-wrap justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600">Vendor Connect</h1>

          <div className="flex flex-wrap gap-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="text-md text-gray-800 hover:text-blue-800 transition cursor-pointer"
              >
                {section
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>

          <div>
            <button
              className="p-2 bg-white border border-blue-500 rounded-sm text-blue-700 cursor-pointer hover:bg-gray-100"
              onClick={handleModalOpen}
            >
              Vendor Login
            </button>
            <button
              className="p-2 ml-4 bg-blue-500 rounded-sm text-white cursor-pointer hover:bg-blue-600"
              onClick={handleModalOpen}
            >
              Company Login
            </button>
          </div>
        </div>
      </nav>

      <LoginModal
        show={isLoginModalopen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default LandingNavbar;
