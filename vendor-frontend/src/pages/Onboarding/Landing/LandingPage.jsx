import React from "react";
import LandingNavbar from "./Components/landingNavbar";
import HomeComponent from "./Components/home";
import { HowItWorksComponent } from "./Components/howItWorks";
import VendorBenefits from "./Components/forVendors";
import { ForCompaniesComponent } from "./Components/forCompanies";
import FeaturesComponent from "./Components/features";
import WhyChoosePlatform from "./Components/whyChoose";
import PricingSection from "./Components/pricing";
import FAQSection from "./Components/faq";
import Footer from "./Components/footer";
import ContactSection from "./Components/contact";

const LandingPage = () => (
  <>
    <LandingNavbar />

    <div className="mt-10">
      <HomeComponent />
      <HowItWorksComponent />
      <VendorBenefits />
      <ForCompaniesComponent />
      <FeaturesComponent />
      <WhyChoosePlatform />
      <PricingSection />
      <FAQSection />
      <ContactSection/>
      
    </div>
    <Footer />
  </>
);
export default LandingPage;
