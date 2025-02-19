import React from "react";
import AnimatedSection from "../components/AnimatedComponent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-Black">
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/03/15/37/stduio-2035349_1280.jpg')" }} // Replace with actual image
      >
        <div className="absolute inset-0 "></div>
        <AnimatedSection>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 animate-fadeIn">
            We Thrive on Your Success
          </h1>
          <p className="text-lg animate-fadeInSlow text-white">
            If you are looking for an agency to help you create a remarkable presence offline and online, 
            you’ve come to the right place. We can help you take your business to the next level.
          </p>
        </div>
        </AnimatedSection>
        
      </section>
      

      {/* Why AdPaper */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-amber-300 mb-6">Why AdPaper ?</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-yellow-400 text-2xl">-</span>
                <span><strong>Affordable Innovation:</strong> Get creative, high-impact strategies that fit your budget, no matter the size of your business.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-yellow-400 text-2xl">-</span>
                <span><strong>Personalized Approach:</strong> Every campaign is crafted to tell your unique brand story and resonate with your target audience.</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-yellow-400 text-2xl">-</span>
                <span><strong>Maximum ROI:</strong> Our solutions focus on delivering measurable results, ensuring your investment drives success.</span>
              </li>
            </ul>
          </div>

          
        </div>
      </section>

      {/* About Us */}
      <section className="container mx-auto px-6 py-16 bg-gray-400 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-amber-300 mb-6">About Us</h2>
            <p className="mb-4 text-white">We create impactful offline marketing campaigns with personalized paper cups, notebooks, and eco-friendly products. 
              We handle design, production, and distribution, offering sustainable, affordable solutions to boost brand visibility.</p>
            <h3 className="text-2xl font-semibold text-amber-300">Mission</h3>
            <p className="mb-4 text-white">Revolutionizing offline marketing with sustainable, personalized solutions to enhance brand visibility.</p>
            <h3 className="text-2xl font-semibold text-amber-300">Vision</h3>
            <p className=" text-white">Blending creativity with sustainability to become the leading provider of eco-friendly, personalized products.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-amber-300 mb-6">Why Choose Us?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          We are the right team for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          With us, you’ll feel heard. We listen to our client requirements and then select the right solution that fits. 
          We care for your business as our own and genuinely want to help your company reach its potential.
        </p>
      </section>

      {/* Contact Us Form */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          
          {/* Heading with Blue Background */}
          <div className="bg-[#0A192F] text-white p-6 rounded-t-lg">
            <h2 className="text-3xl font-bold text-amber-300">Contact Us</h2>
            <p className="text-lg text-white mt-2">
              We can help you bring your ideas to life. Let’s talk about what we can build and raise together.
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-800 p-6 rounded-b-lg">
            <div className="mb-4">
              <label className="block text-white text-lg mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-lg mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-lg mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none" 
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-white text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>



    </div>
  );
}
