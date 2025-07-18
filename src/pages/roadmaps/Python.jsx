import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PythonRoadmap() {
  const [activeTab, setActiveTab] = useState('roadmap');

  const sections = {
    roadmap: [
      {
        title: "Python Fundamentals",
        steps: [
          "Basic syntax and data types",
          "Control flow (loops, conditionals)",
          "Functions and modules",
          "File I/O operations",
          "Exception handling"
        ]
      },
      {
        title: "Intermediate Python",
        steps: [
          "Object-oriented programming",
          "Working with libraries (pip)",
          "List comprehensions",
          "Decorators and generators",
          "Virtual environments"
        ]
      },
      {
        title: "Advanced Topics",
        steps: [
          "Concurrency (threading, asyncio)",
          "Memory management",
          "Metaclasses",
          "Performance optimization",
          "C extensions"
        ]
      },
      {
        title: "Specializations",
        steps: [
          "Web Development (Django/Flask)",
          "Data Science (Pandas, NumPy)",
          "Machine Learning (TensorFlow, PyTorch)",
          "Automation & Scripting",
          "DevOps (AWS, Docker)"
        ]
      }
    ],
    resources: [
      {
        category: "Official Docs",
        items: [
          { name: "Python Documentation", url: "https://docs.python.org/3/" },
          { name: "PEP 8 Style Guide", url: "https://peps.python.org/pep-0008/" }
        ]
      },
      {
        category: "Courses",
        items: [
          { name: "Python for Everybody (Coursera)", url: "https://www.coursera.org/specializations/python" },
          { name: "Real Python Tutorials", url: "https://realpython.com" }
        ]
      },
      {
        category: "Books",
        items: [
          { name: "Python Crash Course", url: "https://nostarch.com/pythoncrashcourse2e" },
          { name: "Fluent Python", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/" }
        ]
      }
    ],
    tips: [
      "Use type hints for better code maintainability",
      "Learn to use Python's built-in functions effectively",
      "Master virtual environments early (venv or conda)",
      "Practice writing Pythonic code (follow PEP 8)",
      "Contribute to open-source Python projects"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">Python Development Roadmap</h1>
            <p className="text-xl text-amber-100 max-w-3xl">
              Master one of the world's most versatile programming languages
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            {['roadmap', 'resources', 'tips'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${activeTab === tab 
                  ? 'text-amber-600 border-b-2 border-amber-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Roadmap Content */}
          {activeTab === 'roadmap' && (
            <div className="grid md:grid-cols-2 gap-8">
              {sections.roadmap.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-blue-600' : 'from-amber-500 to-amber-600'} p-4`}>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="p-6">
                    <ol className="list-decimal pl-5 space-y-3">
                      {section.steps.map((step, i) => (
                        <li key={i} className="text-gray-700">
                          <span className="font-medium">{step}</span>
                          {index === 0 && i === 0 && (
                            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Start here</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Resources Content */}
          {activeTab === 'resources' && (
            <div className="grid md:grid-cols-3 gap-6">
              {sections.resources.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gray-800 p-4">
                    <h2 className="text-lg font-bold text-white">{category.category}</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i}>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800"
                          >
                            <span className="truncate">{item.name}</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tips Content */}
          {activeTab === 'tips' && (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
                <h2 className="text-xl font-bold text-white">Professional Python Tips</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {sections.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Python Use Cases */}
          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
              <h2 className="text-xl font-bold text-white">Python Applications</h2>
            </div>
            <div className="p-6 grid md:grid-cols-4 gap-4">
              {[
                { icon: '🌐', name: 'Web Development', frameworks: 'Django, Flask, FastAPI' },
                { icon: '📊', name: 'Data Science', frameworks: 'Pandas, NumPy, Matplotlib' },
                { icon: '🧠', name: 'AI/ML', frameworks: 'TensorFlow, PyTorch, scikit-learn' },
                { icon: '🤖', name: 'Automation', frameworks: 'Selenium, BeautifulSoup' }
              ].map((app, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                  <div className="text-3xl mb-2">{app.icon}</div>
                  <h3 className="font-bold text-gray-800">{app.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{app.frameworks}</p>
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