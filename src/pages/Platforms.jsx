import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Platforms() {
  const platforms = [
    {
      name: "freeCodeCamp",
      description: "Completely free coding curriculum with interactive challenges and projects",
      url: "https://www.freecodecamp.org/",
      free: true,
      categories: ["Web Dev", "Python", "Data Science"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      name: "Codecademy",
      description: "Interactive learning platform with structured paths in various technologies",
      url: "https://www.codecademy.com/",
      free: false,
      categories: ["Beginner", "Career Paths"],
      color: "bg-green-50 border-green-100"
    },
    {
      name: "Udemy",
      description: "Affordable courses on all tech topics with frequent discounts",
      url: "https://www.udemy.com/",
      free: false,
      categories: ["Video Courses", "Practical"],
      color: "bg-purple-50 border-purple-100"
    },
    {
      name: "Coursera",
      description: "University courses with financial aid options and certifications",
      url: "https://www.coursera.org/",
      free: true,
      categories: ["Academic", "Certificates"],
      color: "bg-red-50 border-red-100"
    },
    {
      name: "Scrimba",
      description: "Interactive coding platform with unique video+code editor format",
      url: "https://scrimba.com/",
      free: true,
      categories: ["Frontend", "React"],
      color: "bg-amber-50 border-amber-100"
    },
    {
      name: "Pluralsight",
      description: "Professional tech skill development with skill assessments",
      url: "https://www.pluralsight.com/",
      free: false,
      categories: ["Enterprise", "Advanced"],
      color: "bg-indigo-50 border-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Platforms</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated selection of the best platforms to learn programming and tech skills
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden hover:shadow-md transition-shadow ${platform.color}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
                    {platform.free && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Free Option
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {platform.categories.map((category, i) => (
                      <span key={i} className="bg-white text-gray-700 text-xs px-2 py-1 rounded border border-gray-200">
                        {category}
                      </span>
                    ))}
                  </div>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Visit Platform
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">How to Choose a Platform?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "Budget",
                  content: "Consider free vs paid options based on your resources"
                },
                {
                  icon: "🎯",
                  title: "Learning Style",
                  content: "Choose between interactive, video-based, or text-based learning"
                },
                {
                  icon: "📈",
                  title: "Goals",
                  content: "Match platforms to your specific career or skill objectives"
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:bg-gray-50 transition-colors">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}