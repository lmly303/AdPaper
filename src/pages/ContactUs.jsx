import React, { useEffect } from "react";
import AnimatedSection from "../components/AnimatedComponent";

function ContactUs() {

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
              Contact Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fadeInSlow">
              Let's work together to create impactful marketing solutions that make a difference.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📍", title: "Our Location", detail: "Sector-9, Gurugram" },
            { icon: "✉", title: "Email Us", detail: "contact@adpaper.com" },
            { icon: "📞", title: "Call Us", detail: "+91 7011795790" },
          ].map((info, index) => (
            <AnimatedSection key={index}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="text-yellow-400 text-5xl mb-4">{info.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{info.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{info.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#0A192F] text-white p-8 rounded-t-lg shadow-lg">
              <h2 className="text-4xl font-bold text-amber-300 mb-4">Send Us a Message</h2>
              <p className="text-lg text-white/90">
                We'd love to hear from you! Send us a message and our team will get back to you soon.
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

      {/* Google Map (Optional) */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Find Us Here</h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.778087579937!2d76.97864885517913!3d28.46133849066037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1782c3cf1cb9%3A0x84ee46ff7143a836!2sSector%209%2C%20Gurugram%2C%20Haryana%20122001%2C%20India!5e0!3m2!1sen!2sin!4v1711898765432"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default ContactUs;