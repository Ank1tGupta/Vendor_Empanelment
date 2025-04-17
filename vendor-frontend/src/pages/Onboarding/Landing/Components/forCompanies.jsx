import React from "react";
import { Check, Search, Clock, ListChecks } from "lucide-react";

export const ForCompaniesComponent = () => {
  return (
    <>
      <section
        id="for-companies"
        className="min-h-screen bg-blue-50 py-10 px-4  md:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full uppercase font-semibold tracking-wider">
              For Companies
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Streamline Your HR Procurement Process
            </h1>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              Find, vet, and manage qualified service providers all in one
              place, saving your HR department valuable time and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dashboard Preview */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-blue-700 text-white text-sm font-semibold px-6 py-4 rounded-t-lg">
                Company Dashboard Preview
              </div>
              <div className="px-6 py-4">
                {/* Active Service Requests */}
                <div>
                  <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-2">
                    <span>Active Service Requests</span>
                    <button className="text-blue-600 hover:underline text-xs">
                      Post New
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm">
                          IT Support Services
                        </p>
                        <p className="text-xs text-gray-500">
                          Posted: 2 days ago • 8 proposals received
                        </p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm">
                          Office Cleaning Services
                        </p>
                        <p className="text-xs text-gray-500">
                          Posted: 5 days ago • 12 proposals received
                        </p>
                      </div>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        Under Review
                      </span>
                    </div>
                  </div>
                </div>

                {/* Current Vendor Contracts */}
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Current Vendor Contracts
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm">
                          InfoTech Solutions
                        </p>
                        <p className="text-xs text-gray-500">
                          Software Development • Ends: Feb 15, 2024
                        </p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm">
                          Global HR Consultants
                        </p>
                        <p className="text-xs text-gray-500">
                          HR Services • Ends: Jan 30, 2024
                        </p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vendor Analytics */}
                <div className="mt-6 grid grid-cols-3 text-center gap-3 px-4">
                  <div className="bg-gray-200 rounded-sm py-2">
                    <p className="text-xl font-bold">24</p>
                    <p className="text-xs text-gray-500">Active Vendors</p>
                  </div>
                  <div className="bg-gray-200 rounded-sm py-2">
                    <p className="text-xl font-bold rounded-sm">$125k</p>
                    <p className="text-xs text-gray-500">Annual Spend</p>
                  </div>
                  <div className="bg-gray-200 rounded-sm py-2">
                    <p className="text-xl font-bold">92%</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">
                Key Benefits for Companies
              </h2>
              <ul className="space-y-6">
                <li>
                  <p className="font-medium text-sm text-blue-900">
                    🕒 Time Efficiency
                  </p>
                  <p className="text-sm text-gray-600">
                    Reduce vendor search and procurement time by up to 70% with
                    our streamlined platform.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-sm text-blue-900">
                    ✅ Verified Vendors
                  </p>
                  <p className="text-sm text-gray-600">
                    Access pre-vetted service providers with verified
                    credentials and performance ratings.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-sm text-blue-900">
                    💸 Cost Transparency
                  </p>
                  <p className="text-sm text-gray-600">
                    Compare competitive bids and track all expenses with
                    detailed reporting tools.
                  </p>
                </li>
                <li>
                  <p className="font-medium text-sm text-blue-900">
                    📄 Simplified Documentation
                  </p>
                  <p className="text-sm text-gray-600">
                    Manage all vendor contracts and compliance documents in one
                    secure location.
                  </p>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Register as a Company
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f6ff] mt-8  sm:px-8">
          {/* Benefits Section */}
          <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
              How Companies Benefit
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 mb-8">
              Our platform offers a complete solution for your service
              procurement needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vendor Discovery */}

              <div className="bg-blue-100/50 rounded-lg shadow-md p-6">
                <Search className="text-blue-600 h-8 w-8" />
                <h3 className="font-semibold text-lg mb-2">Vendor Discovery</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Search by service category
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Filter by location & expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    View detailed provider profiles
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Read verified client reviews
                  </li>
                </ul>
              </div>

              {/* Vendor Management */}
              <div className="bg-blue-100/50 rounded-lg shadow-md p-6">
                <Clock className="text-blue-600 h-8 w-8" />
                <h3 className="font-semibold text-lg mb-2">
                  Vendor Management
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Track performance metrics
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Manage contract renewals
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Store compliance documents
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Set service level agreements
                  </li>
                </ul>
              </div>

              {/* Financial Control */}
              <div className="bg-blue-100/50 rounded-lg shadow-md p-6">
                <ListChecks className="text-blue-600 h-8 w-8" />
                <h3 className="font-semibold text-lg mb-2">
                  Financial Control
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Compare competitive quotes
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Track budgets and spending
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Generate spending reports
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-blue-600 w-4 h-4 mt-1" />
                    Streamline payment processing
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-lg mt-12 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                Ready to Simplify Your HR Procurement?
              </h3>
              <p className="text-sm text-blue-100 max-w-md">
                Join hundreds of companies already saving time and resources by
                streamlining their vendor management process.
              </p>
              <div className="mt-4 flex gap-4">
                <button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100">
                  Register Now
                </button>
                <button className="bg-blue-800 px-4 py-2 rounded font-semibold text-sm hover:bg-blue-900">
                  Schedule Demo
                </button>
              </div>
            </div>

            <div className="bg-white text-gray-800 rounded-lg p-4 shadow-md max-w-md w-full">
              <p className="text-sm italic">
                "We've reduced our vendor onboarding time by 65% and found
                higher quality service providers since joining the platform."
              </p>
              <div className="flex items-center mt-4">
                <div className="bg-blue-200 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-sm">Sarah Johnson</p>
                  <p className="text-xs text-gray-500">HR Director, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
