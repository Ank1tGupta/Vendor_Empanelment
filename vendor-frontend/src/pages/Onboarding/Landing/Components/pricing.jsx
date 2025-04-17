import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const companyPlans = [
  {
    name: "Starter",
    price: "$99",
    features: [
      "Up to 10 vendor relationships",
      "Basic vendor verification",
      "Digital contracts",
      "Basic reports",
      "Email support",
    ],
    unavailable: ["Advanced analytics", "Custom integrations"],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "$249",
    features: [
      "Up to 50 vendor relationships",
      "Advanced vendor verification",
      "Digital contracts with e-signatures",
      "Advanced analytics",
      "Priority email & phone support",
      "API access",
    ],
    unavailable: ["Custom integrations"],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "$599",
    features: [
      "Unlimited vendor relationships",
      "Premium vendor verification",
      "Advanced contract management",
      "Enterprise analytics & reporting",
      "24/7 priority support",
      "API access",
      "Custom integrations",
    ],
    unavailable: [],
    mostPopular: false,
  },
];

const vendorPlans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic profile",
      "Up to 3 active bids",
      "Basic verification",
      "Community support",
    ],
    unavailable: [
      "Featured listing",
      "Custom proposal templates",
      "Advanced analytics",
    ],
  },
  {
    name: "Growth",
    price: "$49",
    features: [
      "Enhanced profile",
      "Unlimited active bids",
      "Advanced verification",
      "Priority support",
      "Featured listing",
      "Custom proposal templates",
    ],
    unavailable: ["White labeling"],
    mostPopular: true,
  },
  {
    name: "Professional",
    price: "$99",
    features: [
      "Premium profile",
      "Unlimited active bids",
      "Premium verification badge",
      "24/7 priority support",
      "Top featured listing",
      "Advanced proposal system",
      "White labeling",
    ],
    unavailable: [],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("Monthly");
  const [userType, setUserType] = useState("Companies");
  const [activeTab, setActiveTab] = useState("Companies");

  const currentPlans = activeTab === "Companies" ? companyPlans : vendorPlans;

  return (
    <section id="pricing" className="py-16 px-4 md:px-12 bg-blue-100/20">
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 mt-2">
          Choose the plan that’s right for your business needs and scale as you
          grow.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 flex space-x-2 shadow-md">
          {["Companies", "Vendors"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === tab ? "bg-[#2c3e50] text-white" : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-xl border shadow-md p-6 transform transition-transform duration-300 hover:scale-105 bg-white flex flex-col justify-between ${
              plan.mostPopular ? "ring-2 ring-green-600" : ""
            }`}
          >
            {plan.mostPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">
                {plan.price}{" "}
                <span className="text-base font-medium text-gray-500">
                  /month
                </span>
              </p>
              <button
                className={`w-full py-2 rounded-md font-semibold ${
                  plan.mostPopular
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                }`}
              >
                Get Started
              </button>
            </div>
            <ul className="text-left mt-6 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i} className="text-green-600 flex items-center">
                  ✓ <span className="ml-2 text-gray-800">{f}</span>
                </li>
              ))}
              {plan.unavailable.map((f, i) => (
                <li
                  key={i}
                  className="text-gray-400 line-through flex items-center"
                >
                  ✕ <span className="ml-2">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-4xl mx-auto bg-white px-4 py-2 shadow-md rounded-md border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Pricing FAQ
        </h4>
        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-700">
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="font-semibold text-black/90">
              Do you offer a free trial?
            </p>
            <p className="text-black/80">
              Yes, all company plans come with a 14-day free trial.
            </p>
          </div>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="font-semibold text-black/90">
              Can I change plans later?
            </p>
            <p className="text-black/80">
              Absolutely. Upgrade, downgrade, or cancel anytime via your
              dashboard.
            </p>
          </div>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="font-semibold text-black/90">
              Are there any setup fees?
            </p>
            <p className="text-black/80">
              No setup or hidden charges. You only pay for your plan.
            </p>
          </div>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="font-semibold text-black/90">
              Do you offer discounts for annual billing?
            </p>
            <p className="text-black/80">
              Yes, save 20% on any plan when billed annually.
            </p>
          </div>
        </div>
      </div>

     
    </section>
  );
}
