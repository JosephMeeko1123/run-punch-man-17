
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Journal = () => {
  const journalEntries = [
    {
      date: "Today",
      title: "Morning Mile + Matthew 6:33",
      content: "Started the day with a 3-mile run and reflecting on seeking first His kingdom. Today's workout reminded me that when we prioritize God, everything else falls into place. The discipline in training mirrors the discipline in faith.",
      verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33",
      workout: "3-mile run, 100 push-ups, 5-minute plank hold"
    },
    {
      date: "Yesterday",
      title: "Strength Training + Perseverance",
      content: "Heavy leg day today. Every rep was a reminder that growth happens in the discomfort. James 1:4 came alive during my final set of squats - letting perseverance finish its work in me.",
      verse: "Let perseverance finish its work so that you may be mature and complete, not lacking anything. - James 1:4",
      workout: "Squats 5x5, Deadlifts 3x8, Bulgarian split squats, Calf raises"
    },
    {
      date: "2 Days Ago",
      title: "Rest Day Reflection",
      content: "Even Jesus withdrew to pray. Rest isn't laziness when it's intentional. Used today to stretch, pray, and prepare mentally for the week ahead. Sometimes the most productive thing we can do is be still.",
      verse: "Be still, and know that I am God. - Psalm 46:10",
      workout: "Active recovery: 20-minute walk, stretching, meditation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-red-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Daily <span className="text-yellow-400">Journal</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Daily reflections from the intersection of faith and fitness
          </p>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {journalEntries.map((entry, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full">
                      {entry.date}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">RPM</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                    {entry.title}
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {entry.content}
                  </p>
                  
                  {/* Scripture Highlight */}
                  <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-600">
                    <p className="text-navy-900 font-medium italic text-lg leading-relaxed">
                      "{entry.verse}"
                    </p>
                  </div>
                  
                  {/* Workout Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-navy-900 font-semibold mb-2 flex items-center">
                      <span className="mr-2">💪</span>
                      Today's Training:
                    </h4>
                    <p className="text-gray-600">{entry.workout}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105">
              Load More Entries
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Never Miss an <span className="text-yellow-400">Entry</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get daily inspiration delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-navy-900 font-medium"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journal;
