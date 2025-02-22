import React, { useEffect } from "react";
import AnimatedSection from "../components/AnimatedComponent";

function Services() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/03/15/37/stduio-2035349_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <AnimatedSection>
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-yellow-400 mb-6 animate-fadeIn">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fadeInSlow">
              Transforming everyday essentials into powerful advertising spaces, making marketing seamless, smart, and cost-effective.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Branded Paper Cups", description: "Custom-printed eco-friendly paper cups that showcase your brand in cafés, offices, and events.", icon: "🍵" },
            { title: "Custom Notebooks", description: "Personalized notebooks with branded covers, perfect for corporate giveaways and promotional use.", icon: "📒" },
            { title: "Eco-Friendly Packaging", description: "Sustainable packaging solutions that promote your brand while reducing environmental impact.", icon: "🌱" },
            { title: "Targeted Advertising", description: "Strategic product placements to ensure your ads reach the right audience in a natural way.", icon: "🎯" },
            { title: "Design & Branding", description: "Expert design services to create eye-catching and impactful branding on all marketing materials.", icon: "🎨" },
            { title: "Distribution & Logistics", description: "End-to-end service to handle production, distribution, and placement of branded materials.", icon: "🚛" },
          ].map((service, index) => (
            <AnimatedSection key={index}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
                <div className="text-yellow-400 text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              AdPaper offers a cost-effective and high-impact advertising solution through everyday essentials.
            </p>
            <ul className="list-none space-y-4 text-lg text-gray-700">
              <li className="flex items-center justify-center space-x-3">
                <span className="text-yellow-400 text-2xl">✔</span>
                <span>Eco-Friendly & Sustainable Marketing</span>
              </li>
              <li className="flex items-center justify-center space-x-3">
                <span className="text-yellow-400 text-2xl">✔</span>
                <span>Customizable Designs for Maximum Impact</span>
              </li>
              <li className="flex items-center justify-center space-x-3">
                <span className="text-yellow-400 text-2xl">✔</span>
                <span>Seamless Distribution & Placement Strategy</span>
              </li>
              <li className="flex items-center justify-center space-x-3">
                <span className="text-yellow-400 text-2xl">✔</span>
                <span>Affordable Advertising with Maximum ROI</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0A192F] text-white p-8 rounded-t-lg shadow-lg">
              <h2 className="text-4xl font-bold text-amber-300 mb-4">Contact Us</h2>
              <p className="text-lg text-white/90">
                Ready to take your brand to the next level? Let’s discuss how our services can help you!
              </p>
            </div>
            <form className="bg-gray-900 p-8 rounded-b-lg shadow-lg">
              <div className="mb-6">
                <label className="block text-white text-lg mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-lg mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-white text-lg mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;