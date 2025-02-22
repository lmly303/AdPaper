import React, { useEffect } from "react";
import AnimatedSection from "../components/AnimatedComponent";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/03/15/37/stduio-2035349_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <AnimatedSection>
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-6xl font-bold text-yellow-400 mb-6 animate-fadeIn">
              We Thrive on Your Success
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fadeInSlow">
              If you are looking for an agency to help you create a remarkable presence offline and online,
              you’ve come to the right place. We can help you take your business to the next level.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Why AdPaper Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-amber-300 mb-8">Why AdPaper?</h2>
            <ul className="space-y-6">
              {[
                "Affordable Innovation: Get creative, high-impact strategies that fit your budget, no matter the size of your business.",
                "Personalized Approach: Every campaign is crafted to tell your unique brand story and resonate with your target audience.",
                "Maximum ROI: Our solutions focus on delivering measurable results, ensuring your investment drives success.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="text-yellow-400 text-2xl">-</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-300 mb-8">About Us</h2>
              <p className="text-lg text-gray-700 mb-6">
                We create impactful offline marketing campaigns with personalized paper cups, notebooks, and eco-friendly products.
                We handle design, production, and distribution, offering sustainable, affordable solutions to boost brand visibility.
              </p>
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                Revolutionizing offline marketing with sustainable, personalized solutions to enhance brand visibility.
              </p>
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">Vision</h3>
              <p className="text-lg text-gray-700">
                Blending creativity with sustainability to become the leading provider of eco-friendly, personalized products.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src="https://cdn.pixabay.com/photo/2019/04/16/21/34/magnifier-4132832_1280.png"
                alt="Workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-amber-300 mb-8">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-700 leading-relaxed mb-8">
          We are the right team for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.
        </p>
        <p className="max-w-2xl mx-auto text-xl text-gray-700 leading-relaxed">
          With us, you’ll feel heard. We listen to our client requirements and then select the right solution that fits.
          We care for your business as our own and genuinely want to help your company reach its potential.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0A192F] text-white p-8 rounded-t-lg shadow-lg">
              <h2 className="text-4xl font-bold text-amber-300 mb-4">Contact Us</h2>
              <p className="text-lg text-white/90">
                We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
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
