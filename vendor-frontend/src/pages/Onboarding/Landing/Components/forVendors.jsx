import React from "react";
import { BarChart, CalendarCheck, CreditCard, Eye } from "lucide-react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaCalculator,
  FaUsers,
  FaClipboardList,
  FaBuilding,
  FaGavel,
  FaChalkboardTeacher,
} from "react-icons/fa";

const serviceCategories = [
  {
    icon: <FaLaptopCode className="text-indigo-500 text-2xl" />,
    title: "IT & Technology",
    services: [
      "IT Support & Maintenance",
      "Software Development",
      "Cybersecurity Services",
      "Cloud Solutions",
    ],
  },
  {
    icon: <FaPaintBrush className="text-pink-500 text-2xl" />,
    title: "Marketing & Creative",
    services: [
      "Digital Marketing",
      "Graphic Design",
      "Content Creation",
      "Social Media Management",
    ],
  },
  {
    icon: <FaCalculator className="text-yellow-500 text-2xl" />,
    title: "Finance & Accounting",
    services: [
      "Bookkeeping Services",
      "Tax Preparation",
      "Financial Analysis",
      "Payroll Management",
    ],
  },
  {
    icon: <FaUsers className="text-green-500 text-2xl" />,
    title: "HR & Recruiting",
    services: [
      "Talent Acquisition",
      "HR Consulting",
      "Training & Development",
      "Employee Benefits",
    ],
  },
  {
    icon: <FaClipboardList className="text-blue-500 text-2xl" />,
    title: "Administrative",
    services: [
      "Virtual Assistance",
      "Data Entry",
      "Document Management",
      "Customer Support",
    ],
  },
  {
    icon: <FaBuilding className="text-purple-500 text-2xl" />,
    title: "Facilities Management",
    services: [
      "Cleaning Services",
      "Maintenance & Repair",
      "Security Services",
      "Office Management",
    ],
  },
  {
    icon: <FaGavel className="text-pink-400 text-2xl" />,
    title: "Legal Services",
    services: [
      "Contract Review",
      "Legal Consulting",
      "Compliance Management",
      "Intellectual Property",
    ],
  },
  {
    icon: <FaChalkboardTeacher className="text-gray-600 text-2xl" />,
    title: "Professional Training",
    services: [
      "Corporate Training",
      "Skill Development",
      "Certification Programs",
      "Leadership Development",
    ],
  },
];

const vendorBenefits = [
  {
    icon: <Eye className="h-6 w-6 text-green-600" />,
    title: "Increased Visibility",
    desc: "Showcase your services to companies actively seeking providers in your niche.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-green-600" />,
    title: "Simplified Payments",
    desc: "Receive payments securely through our platform with transparent transaction tracking.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-green-600" />,
    title: "Streamlined Scheduling",
    desc: "Manage projects and appointments with our integrated calendar and notification system.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-green-600" />,
    title: "Build Credibility",
    desc: "Collect verified reviews and ratings to establish a strong reputation on the platform.",
  },
];

const VendorBenefits = () => {
  return (
    <section id="for-vendors" className="bg-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-green-800 bg-green-200 px-4 py-1 rounded-full uppercase tracking-wider">
            For Service Providers
          </span>
          <h2 className="text-3xl font-bold mt-4">
            Grow Your Business as a Vendor
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Connect with companies seeking your expertise and expand your client
            base through our streamlined platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Benefits List */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">
              Key Benefits for Vendors
            </h3>
            <ul className="space-y-5">
              {vendorBenefits.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-md">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition">
              Register as a Vendor
            </button>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-green-600 text-white px-6 py-3 font-semibold">
              Vendor Dashboard Preview
            </div>
            <div className="p-6 space-y-6">
              {/* Active Opportunities */}
              <div>
                <h4 className="font-semibold mb-2">
                  Active Opportunities{" "}
                  <span className="ml-2 text-xs text-green-500 bg-green-100 px-2 py-0.5 rounded-full">
                    12 New
                  </span>
                </h4>
                <div className="text-sm text-gray-800">
                  <div className="flex justify-between items-center py-1">
                    <div>
                      <p className="font-medium">IT Support Services</p>
                      <p className="text-gray-500">
                        TechCorp • Budget: $2,500–$3,500
                      </p>
                    </div>
                    <span className="text-yellow-600 text-xs bg-yellow-100 px-2 py-0.5 rounded">
                      Ends in 3 days
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 mt-2 border-t pt-2">
                    <div>
                      <p className="font-medium">Software Development</p>
                      <p className="text-gray-500">
                        InnovateCo • Budget: $15,000–$20,000
                      </p>
                    </div>
                    <span className="text-blue-600 text-xs bg-blue-100 px-2 py-0.5 rounded">
                      New
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Contracts */}
              <div>
                <h4 className="font-semibold mb-2">Active Contracts</h4>
                <div className="text-sm text-gray-800 flex justify-between items-center">
                  <div>
                    <p className="font-medium">Network Maintenance</p>
                    <p className="text-gray-500">
                      GlobalFirm • Ends: Nov 30, 2023
                    </p>
                  </div>
                  <span className="text-green-600 text-xs bg-green-100 px-2 py-0.5 rounded">
                    In Progress
                  </span>
                </div>
              </div>

              {/* Performance */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <p className="text-xl font-bold text-green-700">97%</p>
                  <p className="text-sm text-gray-600">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-green-700">34</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-green-700">$42k</p>
                  <p className="text-sm text-gray-600">Earnings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 ">
        <div className="max-w-5xl mx-auto px-4 bg-white p-6 border border-gray-200 rounded-md shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-2">
            Services You Can Offer
          </h2>
          <p className="text-center mb-8 text-gray-600">
            Our platform supports a wide range of professional services across
            multiple categories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {serviceCategories.map((cat, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg  border border-gray-200"
              >
                <div className="mb-3 ">{cat.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {cat.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-3">
              Not seeing your service category? We’re expanding our categories
              regularly.
            </p>
            <button className="bg-gray-200 hover:bg-gray-300 text-sm font-medium px-5 py-2 rounded-md">
              Contact Us for Custom Categories
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-2">
          Join Our Growing Vendor Community
        </h3>
        <p className="text-gray-600 mb-4">
          Take your service business to the next level by connecting with
          companies actively seeking your expertise.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Register as a Vendor Today
        </button>
      </div>
    </section>
  );
};

export default VendorBenefits;
