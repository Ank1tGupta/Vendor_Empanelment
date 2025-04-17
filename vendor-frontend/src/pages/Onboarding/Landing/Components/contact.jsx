import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-blue-50 py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 mt-2">
          Have questions about our platform? Reach out to our team for
          personalized assistance.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Message Form */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
            />
            <label htmlFor="am-a">I am a</label>
            <select className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2">
              <option>Select an option</option>
              <option>Vendor</option>
              <option>Company</option>
              <option>Other</option>
            </select>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
            />
            <label htmlFor="">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#7f8cbd] text-white p-2 w-full rounded-full hover:shadow-lg cursor-pointer hover:-translate-y-1 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="">
          {/* Contact Info */}
          <div className="bg-[#7f8cbd] text-white p-6 rounded-xl shadow space-y-4 mb-5">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex gap-4 ">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+1 (800) 123-4567</p>
                  <p className="text-sm text-gray-200">Mon–Fri, 9AM–6PM EST</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>support@vendorconnect.com</p>
                  <p className="text-sm text-gray-200">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <div>
                <p className="font-medium">Office</p>
                <p>123 Business Avenue, Suite 500</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-white text-blue-600 rounded-full p-2 hover:bg-gray-200"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 rounded-full p-2 hover:bg-gray-200"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 rounded-full p-2 hover:bg-gray-200"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-white text-blue-600 rounded-full p-2 hover:bg-gray-200"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Schedule Demo */}
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Schedule a Demo</h3>
            <p className="text-gray-600 mb-4">
              See our platform in action with a personalized demo tailored to
              your organization’s needs.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
              />

              <div className="flex gap-4">
              <input
                type="email"
                placeholder="Business Email"
                className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white border-gray-200 shadow-sm focus:ring-none focus:outliine-none rounded px-4 py-2"
              />
              </div>
              
              <button
                type="submit"
                className="bg-[#7f8cbd] text-white p-2 w-full rounded-full hover:shadow-lg cursor-pointer hover:-translate-y-1 transition-all duration-200"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
