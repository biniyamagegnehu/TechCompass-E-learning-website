import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PythonRoadmap() {
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
        items: [
          { name: "Python Official Docs", url: "https://docs.python.org/3/" },
          { name: "Python Enhancement Proposals", url: "https://peps.python.org/" }
        ]
      },
      {
        category: "Learning Platforms",
        items: [
          { name: "Python for Beginners (Microsoft)", url: "https://learn.microsoft.com/en-us/training/paths/beginner-python/" },
          { name: "Real Python Tutorials", url: "https://realpython.com" }
        ]
      },
      {
        category: "Recommended Books",
        items: [
          { name: "Python Crash Course (Eric Matthes)", url: "https://nostarch.com/pythoncrashcourse2e" },
          { name: "Fluent Python (Luciano Ramalho)", url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Python Development Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured guide to mastering Python programming
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            {['overview', 'roadmap', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
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
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Considerations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Not ideal for mobile development</li>
                      <li>Slower execution than compiled languages</li>
                      <li>Dynamic typing can lead to runtime errors</li>
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
                  <div className="bg-gray-800 p-4">
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
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            <span>{item.name}</span>
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

          {/* Python Applications Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Python Applications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Web Development", icon: "🌐", tech: "Django, Flask" },
                { name: "Data Science", icon: "📊", tech: "Pandas, NumPy" },
                { name: "Machine Learning", icon: "🧠", tech: "TensorFlow, PyTorch" },
                { name: "Automation", icon: "⚙️", tech: "Selenium, BeautifulSoup" }
              ].map((app, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="text-2xl mb-2">{app.icon}</div>
                  <h3 className="font-medium text-gray-800">{app.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{app.tech}</p>
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