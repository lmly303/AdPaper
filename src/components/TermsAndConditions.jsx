import React, { useEffect } from "react";
import AnimatedSection from "../components/AnimatedComponent";

function TermsAndConditions() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[40vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/03/15/37/stduio-2035349_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <AnimatedSection>
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-yellow-400 mb-6 animate-fadeIn">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fadeInSlow">
              Please read our terms carefully before using our services.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Terms of Use</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            By accessing or using AdPaper's services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Eligibility</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our services are available to individuals who are at least 18 years old. By using AdPaper, you confirm that you meet this requirement.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">User Responsibilities</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Please notify us immediately of any unauthorized use.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Intellectual Property</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            All content, trademarks, and intellectual property on AdPaper are owned by or licensed to us. You may not use, reproduce, or distribute any content without prior written consent.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Limitation of Liability</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            AdPaper is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Your use of our services is at your own risk.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;