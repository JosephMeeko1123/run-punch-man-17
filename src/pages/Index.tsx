import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-red-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* RunPunchMan Logo */}
            <div className="mx-auto w-[960px] h-[960px] md:w-[1152px] md:h-[1152px] flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <img 
                src="/lovable-uploads/6841411b-a5ff-4f1d-ad6b-4a5d2af74299.png" 
                alt="RunPunchMan Logo - Train Daily. Live Boldly." 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="block text-yellow-400">TRAIN DAILY.</span>
              <span className="block">LIVE BOLDLY.</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We're not superheroes, but through <span className="text-yellow-400 font-semibold">Jesus</span> and daily discipline, 
              we become more than we ever imagined.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Discover My Story
              </Link>
              <Link 
                to="/journal" 
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Read Daily Journal
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute bottom-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-red-600 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              The <span className="text-red-600">RunPunchMan</span> Mission
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Faith */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">✝️</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Faith-Centered</h3>
              <p className="text-gray-600 leading-relaxed">
                Every step, every rep, every day begins and ends with Jesus. 
                Our strength comes from Him who strengthens us.
              </p>
            </div>
            
            {/* Fitness */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-navy-900">💪</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Physical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our bodies are temples. We honor God through discipline, 
                consistency, and pushing beyond our limits.
              </p>
            </div>
            
            {/* Discipline */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Daily Discipline</h3>
              <p className="text-gray-600 leading-relaxed">
                Small, consistent actions compound into extraordinary results. 
                Every day is a choice to become better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-navy-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join me in discovering what it means to train daily and live boldly through Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/scripture" 
              className="bg-yellow-400 hover:bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Daily Scripture
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Weekly Inspiration
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
