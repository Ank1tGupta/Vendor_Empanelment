import { useState } from "react";

const faqs = [
  "How does the vendor verification process work?",
  "How do companies post service requirements?",
  "How are payments handled on the platform?",
  "Can vendors proactively approach companies?",
  "How do contract renewals work?",
  "Is my company and vendor data secure?",
  "Can we integrate with our existing HR systems?",
  "What happens if there’s a dispute with a vendor?",
  "Do you offer onboarding assistance?",
  "Can we customize vendor application forms?",
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="min-h-screen bg-gray-50 px-4 py-12 flex flex-col items-center"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-sm text-gray-500 text-center mb-10 max-w-xl">
        Find answers to common questions about our vendor empanelment platform.
      </p>

      <div className="w-full max-w-4xl space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm cursor-pointer transition"
            onClick={() => toggleIndex(index)}
          >
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-sm md:text-base font-medium">{faq}</span>
              <span className="text-gray-500 text-lg">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {/* Placeholder answer */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula.
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-6 rounded-md shadow max-w-xl w-full text-center space-y-4">
        <h3 className="text-base font-semibold">Still have questions?</h3>
        <p className="text-sm text-gray-500">
          Our support team is ready to help you with any questions about our
          platform.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#7f8cbd] hover:shadow-md text-white text-sm px-4 py-2 rounded">
            Contact Support
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-2 rounded">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
