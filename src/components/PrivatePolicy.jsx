import React, { useEffect } from "react";
import AnimatedSection from "../components/AnimatedComponent";

function PrivacyPolicy() {

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
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fadeInSlow">
              Your privacy is important to us. Learn how we protect and manage your data.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Privacy Commitment</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At AdPaper, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Information We Collect</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and payment details when you interact with our services. This information is used to provide and improve our offerings.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">How We Use Your Information</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Your information is used to process transactions, communicate with you, and enhance your experience with AdPaper. We do not share your data with third parties without your consent.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Data Security</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse. Your trust is our top priority.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Your Rights</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            You have the right to access, update, or delete your personal information at any time. If you have any questions or concerns, please contact us.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;