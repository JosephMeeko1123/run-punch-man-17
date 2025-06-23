
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-red-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-yellow-400">Story</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            How faith and fitness collided to create something powerful
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">The Beginning</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                RunPunchMan wasn't born in a gym or on a running track. It was born in a moment of 
                realization that my physical discipline and spiritual walk weren't separate journeys—they 
                were meant to be one unified pursuit of becoming who God created me to be.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Like many people, I used to compartmentalize my life. Faith was for Sundays, fitness 
                was for feeling good about myself, and daily life was just... getting by. But God had 
                a different plan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-4">The Faith Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every morning starts with Scripture and prayer. This isn't just routine—it's 
                  relationship. When I read about endurance in James 1:4 or strength in 
                  Philippians 4:13, I realize that God is preparing me for more than just the day ahead.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">The Fitness Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  My body is a temple, and how I treat it reflects how I honor God. Every rep, 
                  every mile, every drop of sweat is an act of worship—a declaration that I won't 
                  settle for mediocrity in any area of life.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-navy-900 p-8 rounded-xl text-white mb-12">
              <h2 className="text-3xl font-bold mb-6">Why "RunPunchMan"?</h2>
              <p className="text-lg leading-relaxed mb-6">
                The name comes from the idea that we're not born superheroes, but we can train like 
                we're preparing for something extraordinary. In the anime "One Punch Man," Saitama 
                becomes incredibly strong through simple, consistent training. But unlike Saitama, 
                our strength comes from Christ.
              </p>
              <p className="text-lg leading-relaxed">
                <span className="text-yellow-400 font-semibold">"Run"</span> represents the race set before us (Hebrews 12:1). 
                <span className="text-yellow-400 font-semibold">"Punch"</span> represents the fight against complacency and sin. 
                <span className="text-yellow-400 font-semibold">"Man"</span> represents the person God is shaping me to become.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">The Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                My mission is simple: to inspire others to see that faith and fitness aren't separate 
                pursuits, but complementary disciplines that help us become the people God created us to be. 
                Through daily consistency in both spiritual and physical training, we discover strength 
                we never knew we had.
              </p>
              
              <div className="bg-yellow-400 p-6 rounded-xl inline-block">
                <p className="text-navy-900 font-bold text-lg">
                  "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off 
                  everything that hinders and the sin that so easily entangles. And let us run with 
                  perseverance the race marked out for us." - Hebrews 12:1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
