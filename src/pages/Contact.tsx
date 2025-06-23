
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-red-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Have questions about faith, fitness, or the RunPunchMan journey? Let's connect!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="fitness">Fitness Advice</option>
                    <option value="faith">Faith & Spirituality</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    placeholder="Share your thoughts, questions, or how the RunPunchMan journey has impacted you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Email</p>
                      <p className="text-gray-600">hello@runpunchman.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-navy-900">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Social Media</p>
                      <p className="text-gray-600">@RunPunchMan on all platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
                      <span className="text-white">⏰</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Response Time</p>
                      <p className="text-gray-600">Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-navy-900 to-red-900 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Weekly Inspiration</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Get weekly devotionals, training tips, and behind-the-scenes content delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-navy-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-navy-900 py-3 rounded-lg font-bold transition-colors">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-300 mt-4">
                  Join 1,000+ others on the journey. Unsubscribe anytime.
                </p>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">How did you start combining faith and fitness?</h4>
                    <p className="text-gray-600 text-sm">It started with realizing that physical discipline and spiritual discipline go hand in hand...</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">What's your daily routine like?</h4>
                    <p className="text-gray-600 text-sm">Every morning begins with Scripture and prayer, followed by physical training...</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Do you offer personal training?</h4>
                    <p className="text-gray-600 text-sm">Currently focusing on online inspiration and community building...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
