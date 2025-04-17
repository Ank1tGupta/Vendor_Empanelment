import { Search, FileText, BadgeCheck, CreditCard, BarChart2, MessageSquare } from 'lucide-react';
import AdditionalFeaturesComponent from './additionalFeatures';

const features = [
  {
    icon: <Search className="text-blue-600 w-6 h-6" />, 
    title: 'Smart Matching System',
    desc: 'AI-powered algorithm connects companies with the most suitable vendors based on requirements and expertise.',
    points: [
      'Skill and expertise matching',
      'Location-based recommendations',
      'Budget and timeline compatibility'
    ],
    border: 'border-t-4 border-blue-600'
  },
  {
    icon: <FileText className="text-purple-600 w-6 h-6" />,
    title: 'Contract Management',
    desc: 'Streamline the entire contract lifecycle from creation to renewal with digital documentation tools.',
    points: [
      'Digital contract templates',
      'E-signature capabilities',
      'Renewal reminders and tracking'
    ],
    border: 'border-t-4 border-purple-600'
  },
  {
    icon: <BadgeCheck className="text-green-600 w-6 h-6" />,
    title: 'Vendor Verification',
    desc: 'Comprehensive verification process ensures all vendors on our platform are legitimate and trustworthy.',
    points: [
      'Business license verification',
      'Insurance and compliance checks',
      'Credential validation'
    ],
    border: 'border-t-4 border-green-600'
  },
  {
    icon: <CreditCard className="text-yellow-500 w-6 h-6" />,
    title: 'Secure Payments',
    desc: 'Integrated payment system facilitates secure transactions between companies and vendors.',
    points: [
      'Escrow payment options',
      'Milestone-based payments',
      'Invoice management system'
    ],
    border: 'border-t-4 border-yellow-500'
  },
  {
    icon: <BarChart2 className="text-red-500 w-6 h-6" />,
    title: 'Performance Analytics',
    desc: 'Comprehensive reporting tools to track and analyze vendor performance and spending patterns.',
    points: [
      'Vendor performance metrics',
      'Cost analysis and reporting',
      'Service quality tracking'
    ],
    border: 'border-t-4 border-red-500'
  },
  {
    icon: <MessageSquare className="text-indigo-600 w-6 h-6" />,
    title: 'Communication Suite',
    desc: 'Built-in messaging and collaboration tools to keep all project communications in one secure place.',
    points: [
      'Secure messaging system',
      'File sharing capabilities',
      'Project discussion boards'
    ],
    border: 'border-t-4 border-indigo-600'
  }
];

export default function FeaturesComponent() {
  return (
    <section id='features' className="bg-gray-50 px-40 py-10">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Platform Features</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Powerful tools designed to streamline vendor-company relationships and simplify HR operations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className={`bg-white rounded-lg shadow-sm p-4 ${feature.border}`}>
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
            <ul className="text-sm text-green-700 list-disc list-inside space-y-1">
              {feature.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <AdditionalFeaturesComponent/>
    </section>
  );
}
