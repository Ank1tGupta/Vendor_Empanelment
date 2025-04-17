import React from "react";
import { ShieldCheck, Clock, FileText, BarChart } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
    title: "Verified Providers",
    desc: "All vendors undergo thorough verification for reliability and quality.",
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: "Time Efficiency",
    desc: "Reduce HR workload by 70% with streamlined procurement processes.",
  },
  {
    icon: <FileText className="h-8 w-8 text-purple-600" />,
    title: "Document Management",
    desc: "Centralized storage for contracts, invoices, and service documents.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-purple-600" />,
    title: "Analytics & Insights",
    desc: "Track performance metrics and spending patterns across services.",
  },
];

const PlatformBenefits = () => {
  return (
    <section className="bg-gray-100 pb-10 pt-5 mt-10">
        
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-4 py-1 rounded-full uppercase tracking-wider">
          Platform Benefits
        </span>
        <h2 className="text-3xl font-bold mt-4">Why Choose Our Empanelment System</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start text-left hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
            <p className="text-sm text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformBenefits;
