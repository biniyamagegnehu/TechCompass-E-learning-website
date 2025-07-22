import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PythonRoadmap() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: "About Python",
      description: [
        "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability with its notable use of significant whitespace.",
        "Key characteristics include dynamic typing, automatic memory management, and support for multiple programming paradigms (object-oriented, imperative, functional).",
        "Python's extensive standard library and vast ecosystem of third-party packages make it suitable for web development, data analysis, artificial intelligence, scientific computing, and more."
      ],
      features: [
        "Easy-to-learn syntax emphasizing readability",
        "Cross-platform compatibility",
        "Large standard library",
        "Dynamically typed",
        "Strong community support"
      ]
    },
    roadmap: [
      {
        title: "Core Python",
        steps: [
          "Basic syntax and data structures (lists, dictionaries, tuples, sets)",
          "Control flow (conditionals, loops)",
          "Functions and lambda expressions",
          "File I/O operations",
          "Exception handling"
        ]
      },
      {
        title: "Intermediate Concepts",
        steps: [
          "Object-oriented programming (classes, inheritance)",
          "Modules and packages",
          "List comprehensions and generators",
          "Decorators and context managers",
          "Virtual environments (venv, pipenv)"
        ]
      },
      {
        title: "Advanced Python",
        steps: [
          "Concurrency (threading, multiprocessing, asyncio)",
          "Memory management and optimization",
          "Metaclasses and descriptors",
          "C extensions and Cython",
          "Performance profiling"
        ]
      },
      {
        title: "Specializations",
        steps: [
          "Web Development: Django, Flask, FastAPI",
          "Data Science: Pandas, NumPy, Matplotlib",
          "Machine Learning: scikit-learn, TensorFlow",
          "Automation: Scripting, Web Scraping",
          "DevOps: Docker integration, AWS services"
        ]
      }
    ],
    resources: [
      {
        category: "Official Documentation",
        icon: "📚",
        items: [
          { 
            name: "Python Official Docs", 
            url: "https://docs.python.org/3/",
            description: "Comprehensive official documentation for all Python versions"
          },
          { 
            name: "Python Enhancement Proposals", 
            url: "https://peps.python.org/",
            description: "The official repository for Python language proposals"
          },
          { 
            name: "Python Standard Library", 
            url: "https://docs.python.org/3/library/",
            description: "Documentation for Python's built-in modules"
          }
        ]
      },
      {
        category: "Learning Platforms",
        icon: "🎓",
        items: [
          { 
            name: "Python for Beginners (Microsoft)", 
            url: "https://learn.microsoft.com/en-us/training/paths/beginner-python/",
            description: "Free learning path from Microsoft"
          },
          { 
            name: "Real Python Tutorials", 
            url: "https://realpython.com",
            description: "High-quality tutorials and courses"
          },
          { 
            name: "Python Institute", 
            url: "https://pythoninstitute.org",
            description: "Official certification programs"
          },
          { 
            name: "Exercism Python Track", 
            url: "https://exercism.org/tracks/python",
            description: "Practice with mentor feedback"
          }
        ]
      },
      {
        category: "Recommended Books",
        icon: "📖",
        items: [
          { 
            name: "Python Crash Course (Eric Matthes)", 
            url: "https://nostarch.com/pythoncrashcourse2e",
            description: "Beginner-friendly hands-on approach"
          },
          { 
            name: "Fluent Python (Luciano Ramalho)", 
            url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",
            description: "For intermediate to advanced developers"
          },
          { 
            name: "Effective Python (Brett Slatkin)", 
            url: "https://effectivepython.com/",
            description: "90 specific ways to write better Python"
          }
        ]
      },
      {
        category: "Community & Tools",
        icon: "👥",
        items: [
          { 
            name: "PyPI (Python Package Index)", 
            url: "https://pypi.org/",
            description: "Repository of Python packages"
          },
          { 
            name: "Python Discord", 
            url: "https://pythondiscord.com/",
            description: "Large Python community for help and discussion"
          },
          { 
            name: "Awesome Python", 
            url: "https://github.com/vinta/awesome-python",
            description: "Curated list of Python frameworks and tools"
          },
          { 
            name: "PyCon Videos", 
            url: "https://pyvideo.org/",
            description: "Talks from Python conferences worldwide"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
                    {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back 
          </button>

          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Python Development Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured guide to mastering Python programming from beginner to advanced levels
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            {['overview', 'roadmap', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${activeTab === tab 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{content.overview.title}</h2>
                {content.overview.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.overview.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Learn Python?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Strengths</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Versatile across multiple domains</li>
                      <li>Large community and ecosystem</li>
                      <li>Excellent for rapid prototyping</li>
                      <li>Strong data processing capabilities</li>
                      <li>High demand in job market</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Considerations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Not ideal for mobile development</li>
                      <li>Slower execution than compiled languages</li>
                      <li>Dynamic typing can lead to runtime errors</li>
                      <li>Global interpreter lock (GIL) limits threading</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              {content.roadmap.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-primary-600 p-4">
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="p-6">
                    <ol className="list-decimal pl-5 space-y-3">
                      {section.steps.map((step, i) => (
                        <li key={i} className="text-gray-700">
                          {step}
                          {index === 0 && i === 0 && (
                            <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Begin here</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="grid md:grid-cols-2 gap-6">
              {content.resources.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="bg-primary-600 p-4 flex items-center">
                    <span className="text-xl mr-3">{category.icon}</span>
                    <h2 className="text-lg font-bold text-white">{category.category}</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {category.items.map((item, i) => (
                        <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col group"
                          >
                            <div className="flex items-center">
                              <span className="font-medium text-primary-600 group-hover:text-primary-800">
                                {item.name}
                              </span>
                              <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Python Applications Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Python Applications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  name: "Web Development", 
                  icon: "🌐", 
                  tech: "Django, Flask, FastAPI",
                  description: "Build scalable web applications and APIs"
                },
                { 
                  name: "Data Science", 
                  icon: "📊", 
                  tech: "Pandas, NumPy, Matplotlib",
                  description: "Data analysis, visualization, and manipulation"
                },
                { 
                  name: "Machine Learning", 
                  icon: "🧠", 
                  tech: "TensorFlow, PyTorch",
                  description: "AI model development and training"
                },
                { 
                  name: "Automation", 
                  icon: "⚙️", 
                  tech: "Selenium, BeautifulSoup",
                  description: "Scripting and task automation"
                },
                { 
                  name: "Scientific Computing", 
                  icon: "🔬", 
                  tech: "SciPy, SymPy",
                  description: "Numerical and symbolic computing"
                },
                { 
                  name: "Game Development", 
                  icon: "🎮", 
                  tech: "Pygame, Panda3D",
                  description: "2D and 3D game creation"
                },
                { 
                  name: "DevOps", 
                  icon: "🛠️", 
                  tech: "Ansible, Docker",
                  description: "Infrastructure automation"
                },
                { 
                  name: "Cybersecurity", 
                  icon: "🔒", 
                  tech: "Scapy, Requests",
                  description: "Security tools and testing"
                }
              ].map((app, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors hover:shadow-sm"
                >
                  <div className="text-2xl mb-2">{app.icon}</div>
                  <h3 className="font-medium text-gray-800">{app.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{app.tech}</p>
                  <p className="text-xs text-gray-500 mt-2">{app.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Python Career Paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Python Developer",
                  salary: "$80k - $140k",
                  skills: ["Django/Flask", "REST APIs", "Database design"],
                  companies: ["Startups", "Tech firms", "Digital agencies"]
                },
                {
                  title: "Data Scientist",
                  salary: "$90k - $160k",
                  skills: ["Pandas", "NumPy", "Machine Learning"],
                  companies: ["Finance", "Healthcare", "E-commerce"]
                },
                {
                  title: "DevOps Engineer",
                  salary: "$100k - $170k",
                  skills: ["Automation", "Cloud services", "CI/CD"],
                  companies: ["Tech companies", "Enterprises", "Cloud providers"]
                }
              ].map((path, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-primary-600 mb-2">{path.title}</h3>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Salary Range:</span> {path.salary}</p>
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-800 mb-1">Key Skills:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {path.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Common Employers:</h4>
                    <p className="text-sm text-gray-700">{path.companies.join(", ")}</p>
                  </div>
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