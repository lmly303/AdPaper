import React from 'react'
import AnimatedSection from '../components/AnimatedComponent'

function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/03/15/37/stduio-2035349_1280.jpg')" }} // Replace with actual image
      >
        <div className="absolute inset-0 "></div>
        <AnimatedSection>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 animate-fadeIn">
            Contact Us
          </h1>
          <p className="text-lg animate-fadeInSlow text-white">
            Let's work together to create impactful marketing solutions that make a difference.
          </p>
        </div>
        </AnimatedSection>
        
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {[
            { icon: "📍", title: "Our Location", detail: "123 AdPaper Street, New York, USA" },
            { icon: "✉", title: "Email Us", detail: "contact@adpaper.com" },
            { icon: "📞", title: "Call Us", detail: "+1 234 567 890" },
          ].map((info, index) => (
            <div key={index} className="bg-gray-400 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <div className="text-yellow-400 text-4xl">{info.icon}</div>
              <h3 className="mt-4 text-2xl font-bold">{info.title}</h3>
              <p className="mt-2 text-lg">{info.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl">
          
          {/* Heading with Blue Background */}
          <div className="bg-[#0A192F] text-white p-6 rounded-t-lg">
            <h2 className="text-3xl font-bold text-amber-300">Send Us a Message</h2>
            <p className="text-lg text-white mt-2">
              We'd love to hear from you! Send us a message and our team will get back to you soon.
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

      {/* Google Map (Optional) */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Find Us Here</h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353155042!3d-37.81720974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1b3c7e1%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1630820915692!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  )
}

export default ContactUs