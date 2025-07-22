import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Platforms() {
  const [activeFilters, setActiveFilters] = useState([]);

  const platforms = [
    {
      name: "freeCodeCamp",
      description: "Completely free coding curriculum with interactive challenges and projects",
      url: "https://www.freecodecamp.org/",
      free: true,
      categories: ["Web Dev", "Python", "Data Science"],
      color: "bg-blue-50 border-blue-200",
      icon: "🆓"
    },
    {
      name: "Codecademy",
      description: "Interactive learning platform with structured paths in various technologies",
      url: "https://www.codecademy.com/",
      free: false,
      categories: ["Beginner", "Career Paths"],
      color: "bg-green-50 border-green-200",
      icon: "👩‍💻"
    },
    {
      name: "Udemy",
      description: "Affordable courses on all tech topics with frequent discounts",
      url: "https://www.udemy.com/",
      free: false,
      categories: ["Video Courses", "Practical"],
      color: "bg-purple-50 border-purple-200",
      icon: "🎥"
    },
    {
      name: "Coursera",
      description: "University courses with financial aid options and certifications",
      url: "https://www.coursera.org/",
      free: true,
      categories: ["Academic", "Certificates"],
      color: "bg-red-50 border-red-200",
      icon: "🎓"
    },
    {
      name: "Scrimba",
      description: "Interactive coding platform with unique video+code editor format",
      url: "https://scrimba.com/",
      free: true,
      categories: ["Frontend", "React"],
      color: "bg-amber-50 border-amber-200",
      icon: "🎬"
    },
    {
      name: "Pluralsight",
      description: "Professional tech skill development with skill assessments",
      url: "https://www.pluralsight.com/",
      free: false,
      categories: ["Enterprise", "Advanced"],
      color: "bg-indigo-50 border-indigo-200",
      icon: "📊"
    },
    {
      name: "edX",
      description: "University-level courses from top institutions worldwide",
      url: "https://www.edx.org/",
      free: true,
      categories: ["Computer Science", "Certificates"],
      color: "bg-gray-50 border-gray-200",
      icon: "🏛️"
    },
    {
      name: "Khan Academy",
      description: "Free beginner-friendly courses on programming and computer science",
      url: "https://www.khanacademy.org/",
      free: true,
      categories: ["Beginner", "CS Fundamentals"],
      color: "bg-teal-50 border-teal-200",
      icon: "👨‍🏫"
    },
    {
      name: "Frontend Masters",
      description: "In-depth frontend development courses from industry experts",
      url: "https://frontendmasters.com/",
      free: false,
      categories: ["Frontend", "JavaScript"],
      color: "bg-yellow-50 border-yellow-200",
      icon: "🖥️"
    },
    {
      name: "The Odin Project",
      description: "Free open-source full-stack curriculum with project-based learning",
      url: "https://www.theodinproject.com/",
      free: true,
      categories: ["Fullstack", "Open Source"],
      color: "bg-orange-50 border-orange-200",
      icon: "🛠️"
    },
    {
      name: "Udacity",
      description: "Nanodegree programs focused on job-ready tech skills",
      url: "https://www.udacity.com/",
      free: false,
      categories: ["Career Focused", "Projects"],
      color: "bg-blue-50 border-blue-200",
      icon: "💼"
    },
    {
      name: "MIT OpenCourseWare",
      description: "Free course materials from MIT's computer science curriculum",
      url: "https://ocw.mit.edu/",
      free: true,
      categories: ["CS Theory", "Advanced"],
      color: "bg-red-50 border-red-200",
      icon: "📚"
    }
  ];

    const categories = [
    { name: "Free", filter: (p) => p.free },
    { name: "Paid", filter: (p) => !p.free },
    { name: "Beginner Friendly", filter: (p) => p.categories.includes("Beginner") },
    { name: "Certifications", filter: (p) => p.categories.includes("Certificates") },
    { name: "University Level", filter: (p) => p.categories.some(cat => ["Academic", "CS Theory"].includes(cat)) },
    { name: "Career Focused", filter: (p) => p.categories.includes("Career Paths") || p.name === "Udacity" }
  ];

  const toggleFilter = (filterName) => {
    setActiveFilters(prev => 
      prev.includes(filterName)
        ? prev.filter(f => f !== filterName)
        : [...prev, filterName]
    );
  };

  const filteredPlatforms = activeFilters.length === 0
    ? platforms
    : platforms.filter(platform => 
        activeFilters.every(filterName => {
          const category = categories.find(c => c.name === filterName);
          return category.filter(platform);
        })
      );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Learning Platforms
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best platforms to learn programming, categorized by learning style, budget, and skill level
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12 px-4">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Filter by:</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = activeFilters.includes(category.name);
                const filteredCount = platforms.filter(category.filter).length;
                
                return (
                  <button
                    key={category.name}
                    onClick={() => toggleFilter(category.name)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white border border-blue-700'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                    <span className={`ml-1.5 px-2 py-0.5 rounded-full text-xs ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {filteredCount}
                    </span>
                  </button>
                );
              })}
              {activeFilters.length > 0 && (
                <button
                  onClick={() => setActiveFilters([])}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>
            {activeFilters.length > 0 && (
              <div className="mt-3 text-sm text-gray-500">
                Showing {filteredPlatforms.length} of {platforms.length} platforms matching all selected filters
              </div>
            )}
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {filteredPlatforms.map((platform, index) => (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${platform.color}`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{platform.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
                    </div>
                    {platform.free ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full font-medium">
                        Free
                      </span>
                    ) : (
                      <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full font-medium">
                        Paid
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-5 flex-grow">{platform.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {platform.categories.map((category, i) => (
                      <span 
                        key={i} 
                        className="bg-white text-gray-700 text-xs px-2.5 py-1 rounded-full border border-gray-200 shadow-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors mt-auto"
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

          {/* Comparison Section */}
          <div className="mt-20 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Platform Comparison</h2>
              <p className="text-gray-600 mb-6">Key features of popular learning platforms</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Free Option</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificates</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {platforms.slice(0, 6).map((platform, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-lg mr-3">{platform.icon}</div>
                            <div>
                              <div className="font-medium text-gray-900">{platform.name}</div>
                              <div className="text-gray-500 text-sm">{platform.categories.join(", ")}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {platform.free ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Yes
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              No
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {platform.categories.includes("Certificates") ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Available
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              Limited
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {platform.description.split(".")[0]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Choosing Guide */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">How to Choose a Platform?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "💰",
                    title: "Budget Considerations",
                    content: "Free platforms offer great value but may lack structure. Paid platforms often provide more comprehensive curricula and support."
                  },
                  {
                    icon: "🎯",
                    title: "Learning Style Match",
                    content: "Video learners thrive on Udemy, interactive learners prefer Codecademy, project-based learners excel with freeCodeCamp."
                  },
                  {
                    icon: "📈",
                    title: "Career Goals",
                    content: "University platforms (Coursera, edX) suit academic paths, while project-based platforms (Scrimba, Odin) help build portfolios."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-3 mr-4 flex-shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Beginner's Recommendation</h2>
              <p className="mb-6 opacity-90">
                For absolute beginners, we recommend starting with free platforms that offer structured learning paths:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>freeCodeCamp for hands-on coding</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>The Odin Project for full-stack web development</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Khan Academy for computer science fundamentals</span>
                </li>
              </ul>
              <a
                href="/roadmaps/beginner-programming"
                className="inline-flex items-center justify-center w-full bg-white text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Explore Beginner Roadmap
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}