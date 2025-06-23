
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Media = () => {
  const mediaContent = [
    {
      type: "video",
      title: "Morning Mile Motivation",
      description: "Starting the day strong with a 5K run and scripture reflection",
      platform: "Instagram",
      engagement: "2.3K views • 150 likes"
    },
    {
      type: "video",
      title: "Deadlift PR + Prayer",
      description: "Hit a new personal record and thanked God for the strength",
      platform: "TikTok",
      engagement: "5.7K views • 890 likes"
    },
    {
      type: "image",
      title: "Scripture Study Setup",
      description: "My morning routine: Bible, coffee, and preparation for the day",
      platform: "Instagram",
      engagement: "1.8K likes • 45 comments"
    },
    {
      type: "video",
      title: "Workout Wednesday Wisdom",
      description: "Combining CrossFit movements with biblical principles",
      platform: "TikTok",
      engagement: "12.1K views • 1.2K likes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-red-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Media <span className="text-yellow-400">Feed</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Follow the daily journey through video and photo updates
          </p>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Media Links */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Follow the Journey</h2>
            <div className="flex justify-center space-x-8">
              <a href="#" className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                <span>📱</span>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                <span>🎵</span>
                <span>TikTok</span>
              </a>
              <a href="#" className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                <span>▶️</span>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Media Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mediaContent.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Media Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">▶️</span>
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-navy-900 text-2xl">📸</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.platform}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.engagement}</span>
                    <button className="text-red-600 hover:text-red-700 font-semibold">
                      View Post →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Training Videos</h3>
              <p className="text-gray-600">Daily workout routines, form tips, and motivation</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-900 text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Scripture Reflections</h3>
              <p className="text-gray-600">Daily Bible study sessions and spiritual insights</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Behind the Scenes</h3>
              <p className="text-gray-600">Real moments, struggles, and victories in the journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the <span className="text-yellow-400">Community</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Follow along for daily inspiration, training tips, and faith-based motivation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105">
              Follow on Instagram
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105">
              Follow on TikTok
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
