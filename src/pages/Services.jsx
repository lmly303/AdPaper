import React from 'react'
import AnimatedSection from '../components/AnimatedComponent'

function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      
    {/* Hero Section */}
    <section 
      className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/02/03/15/37/stduio-2035349_1280.jpg')" }} // Replace with actual image
    >
      <div className="absolute inset-0"></div>
      <AnimatedSection>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4 animate-fadeIn">
          Our Services
        </h1>
        <p className="text-lg animate-fadeInSlow text-white">
          Transforming everyday essentials into powerful advertising spaces, making marketing seamless, smart, and cost-effective.
        </p>
      </div>
      </AnimatedSection>
      
    </section>

    {/* Services Section */}
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
        {[
          { title: "Branded Paper Cups", description: "Custom-printed eco-friendly paper cups that showcase your brand in cafés, offices, and events.", icon: "🍵" },
          { title: "Custom Notebooks", description: "Personalized notebooks with branded covers, perfect for corporate giveaways and promotional use.", icon: "📒" },
          { title: "Eco-Friendly Packaging", description: "Sustainable packaging solutions that promote your brand while reducing environmental impact.", icon: "🌱" },
          { title: "Targeted Advertising", description: "Strategic product placements to ensure your ads reach the right audience in a natural way.", icon: "🎯" },
          { title: "Design & Branding", description: "Expert design services to create eye-catching and impactful branding on all marketing materials.", icon: "🎨" },
          { title: "Distribution & Logistics", description: "End-to-end service to handle production, distribution, and placement of branded materials.", icon: "🚛" },
        ].map((service, index) => (
          <div key={index} className="bg-gray-400 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="text-yellow-400 text-4xl">{service.icon}</div>
            <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
            <p className="mt-2 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="container mx-auto px-6 py-16 rounded-lg">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose Our Services?</h2>
        <p className="text-lg mb-6 text-black">
          AdPaper offers a cost-effective and high-impact advertising solution through everyday essentials.
        </p>
        <ul className="list-none space-y-3 text-lg text-black">
          <li><strong className="text-yellow-300">✔</strong> Eco-Friendly & Sustainable Marketing</li>
          <li><strong className="text-yellow-300">✔</strong> Customizable Designs for Maximum Impact</li>
          <li><strong className="text-yellow-300">✔</strong> Seamless Distribution & Placement Strategy</li>
          <li><strong className="text-yellow-300">✔</strong> Affordable Advertising with Maximum ROI</li>
        </ul>
      </div>
    </section>

    {/* Contact Us Form */}
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-2xl">
        
        {/* Heading with Blue Background */}
        <div className="bg-[#0A192F] text-white p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold text-amber-300">Contact Us</h2>
          <p className="text-lg text-white mt-2">
            Ready to take your brand to the next level? Let’s discuss how our services can help you!
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
  )
}

export default Services