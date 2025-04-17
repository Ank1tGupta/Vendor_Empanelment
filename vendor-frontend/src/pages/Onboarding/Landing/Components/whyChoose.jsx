import React from 'react';
import { Check, CheckCircle, X, XCircle } from 'lucide-react';

const WhyChoosePlatform = () => {
  const traditionalPoints = [
    {
      title: 'Time-Consuming Vendor Search',
      description:
        'Days or weeks spent researching potential vendors through multiple channels.',
    },
    {
      title: 'Manual Verification',
      description:
        'Lengthy background checks and credential verification processes.',
    },
    {
      title: 'Paper-Based Contracts',
      description:
        'Physical documents requiring printing, signing, scanning, and mailing.',
    },
    {
      title: 'Scattered Communications',
      description:
        'Project discussions spread across emails, calls, and messages.',
    },
    {
      title: 'Manual Payment Processing',
      description:
        'Separate invoicing systems and payment tracking methods.',
    },
    {
      title: 'Limited Performance Tracking',
      description:
        'Inconsistent methods for evaluating vendor performance.',
    },
  ];

  const platformPoints = [
    {
      title: 'Instant Vendor Matching',
      description:
        'Find qualified vendors within minutes using our AI-powered matching system.',
    },
    {
      title: 'Pre-Verified Providers',
      description:
        'All vendors are pre-screened with verified credentials and reviews.',
    },
    {
      title: 'Digital Contract Management',
      description:
        'Create, sign, and manage contracts digitally with e-signature capabilities.',
    },
    {
      title: 'Centralized Communication',
      description:
        'All project discussions, files, and updates in one secure location.',
    },
    {
      title: 'Integrated Payment System',
      description:
        'Secure, milestone-based payments with automated invoicing.',
    },
    {
      title: 'Real-time Analytics',
      description:
        'Comprehensive reporting on vendor performance and spending patterns.',
    },
  ];

  return (
    <div className="bg-white  px-20 py-10 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Why Choose Our Platform
        </h2>
        <p className="text-gray-600">
          Transform your vendor management and procurement process with our comprehensive solution.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Traditional Process */}
        <div className=" rounded-xl p-6  shadow-md">
          <div className="flex items-center mb-4">
            <X className="text-red-500 mr-2 rounded-full bg-gray-200 p-1" />
            <h3 className="text-xl font-semibold text-gray-800">Traditional Process</h3>
          </div>
          <ul className="space-y-4">
            {traditionalPoints.map((item, index) => (
              <li key={index}>
                <div className="flex items-start">
                  <XCircle className="text-red-400 mt-1 mr-2 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-red-100 text-red-800 text-sm p-4 rounded-md">
            HR teams spend up to 30% of their time on vendor management tasks.
          </div>
        </div>

        {/* Our Platform */}
        <div className=" rounded-xl p-6  shadow-md">
          <div className="flex items-center mb-4">
            <Check className="text-green-500 mr-2 rounded-full bg-gray-200 p-1" />
            <h3 className="text-xl font-semibold text-gray-800">Our Platform</h3>
          </div>
          <ul className="space-y-4">
            {platformPoints.map((item, index) => (
              <li key={index}>
                <div className="flex items-start">
                  <CheckCircle className="text-green-400 mt-1 mr-2 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-gray-700">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-green-100 text-green-800 text-sm p-4 rounded-md">
            Reduce procurement time by up to 70% and increase team productivity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePlatform;
