const Footer = () => {
    return (
      <footer className="bg-[#1e2633] text-white px-6 md:px-20 py-10 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
  
          {/* VendorConnect Description + Social Icons */}
          <div>
            <h3 className="font-bold text-lg mb-2">VendorConnect</h3>
            <p className="text-gray-400 mb-4">
              Simplifying vendor management and empanelment for HR departments and service providers.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-white">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
  
          {/* For Vendors */}
          <div>
            <h4 className="font-semibold mb-2">For Vendors</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Vendor Benefits</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Vendor Registration</a></li>
              <li><a href="#">Vendor FAQs</a></li>
            </ul>
          </div>
  
          {/* For Companies */}
          <div>
            <h4 className="font-semibold mb-2">For Companies</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Company Benefits</a></li>
              <li><a href="#">Service Procurement</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Company Registration</a></li>
              <li><a href="#">Company FAQs</a></li>
            </ul>
          </div>
  
          {/* Resources & Support */}
          <div>
            <h4 className="font-semibold mb-2">Resources & Support</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Request a Feature</a></li>
              <li><a href="#">Blog & Resources</a></li>
            </ul>
          </div>
        </div>
  
        {/* Newsletter */}
        <div className="max-w-7xl mx-auto mt-10 bg-[#2a3344] rounded-md p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h4 className="font-semibold">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Get the latest updates, news, and special offers delivered directly to your inbox.
            </p>
          </div>
          <form className="flex w-full md:w-auto bg-white rounded-md">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-md text-black focus:outline-none w-full md:w-64"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </form>
        </div>
  
        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© 2023 VendorConnect. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Security</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  