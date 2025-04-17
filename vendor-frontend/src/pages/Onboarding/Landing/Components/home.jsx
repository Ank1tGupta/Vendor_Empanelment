import React from "react";

const HomeComponent = () => (
  <section
    id="home"
    className="mt-15 bg-[#f4f8ff] flex items-center justify-center py-15"
  >
    <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
      {/* Left Text Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Connect Services, Simplify HR Operations
        </h1>
        <p className="text-gray-600 text-lg">
          The ultimate platform connecting businesses with verified service
          providers. Streamline your HR procurement process and find the right
          vendors quickly.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700">
            Join as Vendor
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
            Join as Company
          </button>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center space-x-1">
            <span className="w-8 h-8 bg-blue-300 text-white rounded-full flex items-center justify-center font-bold text-sm">
              C
            </span>
            <span className="w-8 h-8 bg-green-300 text-white rounded-full flex items-center justify-center font-bold text-sm">
              V
            </span>
            <span className="w-8 h-8 bg-yellow-300 text-white rounded-full flex items-center justify-center font-bold text-sm">
              S
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            Join 500+ companies and vendors already on our platform
          </p>
        </div>
      </div>

      {/* Right Activity Card Section */}
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <div className="flex justify-between text-sm font-medium">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Company
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
            Vendor
          </span>
        </div>

        {/* Request */}
        <div className="flex items-start bg-gray-50 p-4 rounded-lg space-x-3">
          <span className="text-purple-600 bg-purple-100 p-2 rounded-full">
            📥
          </span>
          <div>
            <p className="text-sm font-medium">IT Support Services Request</p>
            <p className="text-xs text-gray-500">
              Posted by TechCorp • 2 days ago
            </p>
          </div>
        </div>

        {/* Bid Accepted */}
        <div className="flex items-start bg-green-50 p-4 rounded-lg space-x-3">
          <span className="text-green-600 bg-green-100 p-2 rounded-full">
            ✅
          </span>
          <div>
            <p className="text-sm font-medium">
              Bid Accepted: IT Support Contract
            </p>
            <p className="text-xs text-gray-500">
              InfoTech Solutions • 1 day ago
            </p>
          </div>
        </div>

        {/* Contract Signed */}
        <div className="flex items-start bg-blue-50 p-4 rounded-lg space-x-3">
          <span className="text-blue-600 bg-blue-100 p-2 rounded-full">📅</span>
          <div>
            <p className="text-sm font-medium">Contract Signed: IT Services</p>
            <p className="text-xs text-gray-500">
              TechCorp ⇋ InfoTech Solutions
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="text-xs text-gray-600 border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">
            Real-time activity on our platform
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HomeComponent;
