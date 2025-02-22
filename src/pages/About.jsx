import React, { useEffect } from "react";
import AnimatedSection from "../components/AnimatedComponent";

export default function About() {

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
              About AdPaper
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fadeInSlow">
              Transforming everyday essentials into powerful advertising spaces, making marketing seamless, smart, and cost-effective.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            AdPaper is a creative and cost-effective platform that turns everyday essentials—like notebooks and paper cups—into powerful advertising spaces.
            By embedding ads on these products, we help businesses to reach their audience effortlessly while offering consumers stylish, high-quality, and eco-friendly essentials at unbeatable prices.
          </p>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Why AdPaper?</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Small and medium-sized businesses often struggle to find affordable yet effective advertising options, while consumers are always looking for quality products at the best value.
              Traditional advertising can be expensive and often misses the right audience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              AdPaper bridges this gap by transforming commonly used items into advertising spaces, ensuring brands get noticed in a natural and engaging way.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Our Purpose</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are building AdPaper for students, professionals, and everyday consumers who use notebooks and paper cups daily, as well as for businesses looking for a budget-friendly way to advertise.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            It’s also for eco-conscious buyers who appreciate sustainable products that serve multiple purposes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Because advertising shouldn’t feel intrusive—it should be seamless, smart, and beneficial for everyone. AdPaper isn’t just about ads; it’s about making everyday moments an opportunity for businesses to grow while giving consumers products they love.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0A192F] text-white p-8 rounded-t-lg shadow-lg">
              <h2 className="text-4xl font-bold text-amber-300 mb-4">Contact Us</h2>
              <p className="text-lg text-white/90">
                We can help you bring your ideas to life. Let’s talk about what we can build and grow together.
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