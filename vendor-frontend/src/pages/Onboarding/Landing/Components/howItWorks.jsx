import React from "react";
import PlatformBenefits from "./benefits";

export const HowItWorksComponent = () => {
  return (
    <>
      <section id="how-it-works" className="py-16 bg-white text-gray-800">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">How Our Platform Works</h2>
          <p className="text-gray-600 mt-2">
            Streamlining the connection between service providers and companies
            <br />
            with our simple yet powerful process.
          </p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-30">
          {/* Service Seekers */}
          <div className="bg-blue-50 rounded-xl p-8 shadow-md">
            <span className="bg-blue-200 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
              FOR COMPANIES
            </span>
            <h3 className="text-xl font-semibold mb-6">Service Seekers</h3>

            <ul className="space-y-6">
              {[
                {
                  title: "Create Company Profile",
                  desc: "Register your organization and define your service requirements.",
                },
                {
                  title: "Post Service Requirements",
                  desc: "Specify your needs, budget, and timeline for service providers.",
                },
                {
                  title: "Review & Select Vendors",
                  desc: "Compare proposals, credentials, and ratings to find the best match.",
                },
                {
                  title: "Manage Contracts & Payments",
                  desc: "Handle documentation, track progress, and process payments securely.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-white bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started as Company
            </button>
          </div>

          {/* Service Providers */}
          <div className="bg-green-50 rounded-xl p-8 shadow-md">
            <span className="bg-green-200 text-green-800 text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
              FOR VENDORS
            </span>
            <h3 className="text-xl font-semibold mb-6">Service Providers</h3>

            <ul className="space-y-6">
              {[
                {
                  title: "Create Vendor Profile",
                  desc: "Showcase your services, expertise, credentials, and previous work.",
                },
                {
                  title: "Browse Opportunities",
                  desc: "Find relevant service requests that match your expertise.",
                },
                {
                  title: "Submit Proposals",
                  desc: "Create compelling bids with detailed solutions and pricing.",
                },
                {
                  title: "Deliver & Grow",
                  desc: "Execute services, collect payments, and build your reputation.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-white bg-green-600 w-8 h-8 flex items-center justify-center rounded-full font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started as Vendor
            </button>
          </div>
        </div>

        <PlatformBenefits />
      </section>
    </>
  );
};
