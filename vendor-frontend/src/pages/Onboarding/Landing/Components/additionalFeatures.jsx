import {
  FaPlus,
  FaBell,
  FaCheckCircle,
  FaCalendarAlt,
  FaInfoCircle,
  FaComments,
} from "react-icons/fa";

export default function AdditionalFeaturesComponent() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Additional Capabilities Section */}
        <div className="">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-10">
            Additional Platform Capabilities
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-gray-900 mb-4">
                For Vendors
              </h4>
              <ul className="space-y-4">
                <CapabilityItem
                  icon={<FaPlus className="text-blue-500" />}
                  title="Profile Showcasing"
                  description="Highlight your expertise and past projects to attract clients."
                />
                <CapabilityItem
                  icon={<FaBell className="text-blue-500" />}
                  title="Opportunity Alerts"
                  description="Receive notifications for relevant service requests."
                />
                <CapabilityItem
                  icon={<FaCheckCircle className="text-blue-500" />}
                  title="Proposal Tools"
                  description="Create professional proposals with customizable templates."
                />
                <CapabilityItem
                  icon={<FaCalendarAlt className="text-blue-500" />}
                  title="Availability Calendar"
                  description="Manage your schedule and project timelines efficiently."
                />
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg text-gray-900 mb-4">
                For Companies
              </h4>
              <ul className="space-y-4">
                <CapabilityItem
                  icon={<FaInfoCircle className="text-purple-500" />}
                  title="Vendor Directory"
                  description="Browse verified vendors filtered by service category."
                />
                <CapabilityItem
                  icon={<FaCheckCircle className="text-purple-500" />}
                  title="RFP Generator"
                  description="Create detailed service requests with customizable forms."
                />
                <CapabilityItem
                  icon={<FaInfoCircle className="text-purple-500" />}
                  title="Compliance Tracking"
                  description="Monitor vendor certifications and compliance documents."
                />
                <CapabilityItem
                  icon={<FaComments className="text-purple-500" />}
                  title="Feedback System"
                  description="Rate and review vendors to maintain service quality."
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Transform Your HR Procurement?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of businesses and vendors already benefiting from our
            platform.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#7f8cbd]/80 text-white px-6 py-2 rounded-lg font-medium hover:bg-[#7f8cbd]">
              Register as Company
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">
              Register as Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function CapabilityItem({ icon, title, description }) {
  return (
    <li className="flex items-start">
      <div className="mt-1 mr-3">{icon}</div>
      <div>
        <span className="font-semibold text-gray-900">{title}</span>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
}
