
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const Scripture = () => {
  const [verseOfDay] = useState({
    verse: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    reflection: "This verse isn't about personal achievement—it's about divine empowerment. When we align our goals with God's will, He provides the strength to accomplish what seems impossible."
  });

  const strengthVerses = [
    {
      category: "Endurance",
      verses: [
        {
          text: "Let us run with perseverance the race marked out for us, fixing our eyes on Jesus...",
          reference: "Hebrews 12:1-2",
          application: "Every training session is practice for life's marathon. Focus determines finish."
        },
        {
          text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles...",
          reference: "Isaiah 40:31",
          application: "When our strength fails, His begins. Trust the process of renewal."
        }
      ]
    },
    {
      category: "Discipline",
      verses: [
        {
          text: "No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness...",
          reference: "Hebrews 12:11",
          application: "The burn in your muscles mirrors the growth in your character. Embrace the process."
        },
        {
          text: "Everyone who competes in the games goes into strict training...",
          reference: "1 Corinthians 9:25",
          application: "Athletes train for temporary crowns. We train for eternal impact."
        }
      ]
    },
    {
      category: "Strength",
      verses: [
        {
          text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
          reference: "Psalm 28:7",
          application: "Physical strength is temporary. Spiritual strength is eternal. Build both."
        },
        {
          text: "Be strong and courageous. Do not be afraid; do not be discouraged...",
          reference: "Joshua 1:9",
          application: "Courage isn't the absence of fear—it's action in spite of it."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-red-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Scripture + <span className="text-yellow-400">Strength</span>
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            Where God's Word meets your training ground
          </p>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-400 to-red-600 p-8 rounded-xl text-white shadow-xl mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Verse of the Day</h2>
              <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed mb-4">
                "{verseOfDay.verse}"
              </blockquote>
              <cite className="text-xl font-semibold">- {verseOfDay.reference}</cite>
              <div className="mt-6 pt-6 border-t border-white border-opacity-30">
                <p className="text-lg leading-relaxed italic">
                  {verseOfDay.reflection}
                </p>
              </div>
            </div>
          </div>

          {/* Scripture Categories */}
          <div className="space-y-12">
            {strengthVerses.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-8">
                  {category.verses.map((verseItem, verseIndex) => (
                    <div key={verseIndex} className="border-l-4 border-red-600 pl-6">
                      <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-3">
                        "{verseItem.text}"
                      </blockquote>
                      <cite className="text-lg font-semibold text-red-600 block mb-4">
                        - {verseItem.reference}
                      </cite>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2 flex items-center">
                          <span className="mr-2">💡</span>
                          Training Application:
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {verseItem.application}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prayer Section */}
          <div className="bg-navy-900 p-8 rounded-xl text-white mt-16">
            <h2 className="text-3xl font-bold text-center mb-6">
              Pre-Workout <span className="text-yellow-400">Prayer</span>
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg leading-relaxed italic mb-6">
                "Father, as I prepare my body for training, prepare my heart for Your purposes. 
                Let every rep be an act of worship, every drop of sweat a sacrifice of praise. 
                Give me strength not just for this workout, but for the race You've set before me. 
                Help me honor You with my effort and glorify You with my consistency. 
                In Jesus' name, Amen."
              </p>
              <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scripture;
