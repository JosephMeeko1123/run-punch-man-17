
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Merch = () => {
  const comingSoonItems = [
    {
      name: "Train Daily Live Boldly Tee",
      description: "Premium cotton shirt with the RunPunchMan motto",
      price: "$24.99",
      image: "shirt"
    },
    {
      name: "RPM Logo Sticker Pack",
      description: "Waterproof stickers for your gear",
      price: "$9.99",
      image: "stickers"
    },
    {
      name: "Faith & Fitness Devotional",
      description: "30-day digital devotional combining scripture and training",
      price: "$14.99",
      image: "book"
    },
    {
      name: "One Punch Faith Hoodie",
      description: "Comfortable hoodie for post-workout recovery",
      price: "$39.99",
      image: "hoodie"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-red-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Merch <span className="text-yellow-400">Store</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            Gear to support your faith and fitness journey
          </p>
          <div className="bg-yellow-400 text-navy-900 px-6 py-3 rounded-full inline-block font-bold text-lg">
            Coming Soon!
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">
              What's <span className="text-red-600">Coming</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Quality gear that reflects your commitment to training daily and living boldly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {comingSoonItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">
                        {item.image === 'shirt' && '👕'}
                        {item.image === 'stickers' && '🏷️'}
                        {item.image === 'book' && '📖'}
                        {item.image === 'hoodie' && '👕'}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-bold">
                    Soon
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">{item.price}</span>
                    <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Email Signup for Launch */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Be the First to Know
              </h3>
              <p className="text-gray-600 mb-6">
                Get notified when the RunPunchMan merch store launches and receive an exclusive discount code
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Notify Me
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Plus get 15% off your first order!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Promise</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality First</h3>
              <p className="text-gray-300">Premium materials that last through your toughest workouts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-navy-900 text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Faith-Centered</h3>
              <p className="text-gray-300">Every design reflects our commitment to honoring God</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Purpose-Driven</h3>
              <p className="text-gray-300">A portion of proceeds supports fitness programs in communities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Merch;
