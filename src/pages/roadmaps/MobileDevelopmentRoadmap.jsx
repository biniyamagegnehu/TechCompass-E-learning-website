import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MobileDevelopmentRoadmap() {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: "About Mobile Development",
      description: [
        "Mobile app development involves creating software applications that run on mobile devices like smartphones and tablets. Developers typically use platform-specific languages and frameworks for iOS and Android, or cross-platform solutions that work across both.",
        "The mobile ecosystem continues to grow rapidly, with apps becoming essential for businesses, entertainment, and daily productivity. Modern mobile development emphasizes responsive design, performance optimization, and seamless user experiences.",
        "Key considerations include platform differences, device capabilities, security, and app store requirements. Successful mobile developers combine technical skills with UX/UI design principles."
      ],
      keyComponents: [
        "Platform knowledge (iOS/Android/Cross-platform)",
        "Programming languages (Swift, Kotlin, Dart, JavaScript)",
        "UI/UX design principles",
        "API integration",
        "App store deployment"
      ]
    },
    roadmap: [
      {
        title: "Fundamentals",
        steps: [
          "Programming basics (variables, control flow, functions)",
          "Platform fundamentals (iOS/Android architecture)",
          "Version control with Git",
          "Basic UI development",
          "Debugging techniques"
        ]
      },
      {
        title: "Core Development",
        steps: [
          "Native development (Swift/Kotlin) or cross-platform (Flutter/React Native)",
          "State management",
          "Navigation patterns",
          "Working with APIs",
          "Local data storage"
        ]
      },
      {
        title: "Advanced Concepts",
        steps: [
          "Performance optimization",
          "Offline capabilities",
          "Security best practices",
          "Testing strategies (unit, widget, integration)",
          "Continuous integration"
        ]
      },
      {
        title: "Specializations",
        steps: [
          "Mobile gaming development",
          "AR/VR applications",
          "IoT integration",
          "Machine learning on mobile",
          "Payment systems integration"
        ]
      }
    ],
    resources: [
      {
        category: "Official Documentation",
        icon: "📚",
        items: [
          { 
            name: "Android Developer Docs", 
            url: "https://developer.android.com/docs",
            description: "Official Android development documentation"
          },
          { 
            name: "Apple Developer Docs", 
            url: "https://developer.apple.com/documentation/",
            description: "Official iOS development documentation"
          },
          { 
            name: "Flutter Docs", 
            url: "https://flutter.dev/docs",
            description: "Comprehensive Flutter framework documentation"
          }
        ]
      },
      {
        category: "Learning Platforms",
        icon: "🎓",
        items: [
          { 
            name: "Android Developer Fundamentals", 
            url: "https://developer.android.com/courses/fundamentals-training/toc-v2",
            description: "Google's official Android course"
          },
          { 
            name: "Apple Developer Academy", 
            url: "https://developer.apple.com/tutorials/app-dev-training",
            description: "Apple's official learning resources"
          },
          { 
            name: "Flutter Udemy Course", 
            url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
            description: "Popular Flutter course by Angela Yu"
          }
        ]
      },
      {
        category: "Tools & Frameworks",
        icon: "🛠️",
        items: [
          { 
            name: "React Native", 
            url: "https://reactnative.dev/",
            description: "Cross-platform framework by Facebook"
          },
          { 
            name: "Firebase for Mobile", 
            url: "https://firebase.google.com/docs/android/setup",
            description: "Backend services for mobile apps"
          },
          { 
            name: "Fastlane", 
            url: "https://fastlane.tools/",
            description: "Automation tool for app deployment"
          }
        ]
      },
      {
        category: "Communities",
        icon: "👥",
        items: [
          { 
            name: "Flutter Community", 
            url: "https://flutter.dev/community",
            description: "Official Flutter community resources"
          },
          { 
            name: "Android Developers", 
            url: "https://www.reddit.com/r/androiddev/",
            description: "Active Android developer community"
          },
          { 
            name: "iOS Programming", 
            url: "https://www.reddit.com/r/iOSProgramming/",
            description: "iOS developer community on Reddit"
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
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Mobile Development Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured guide to becoming a mobile app developer
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
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{content.overview.title}</h2>
                {content.overview.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.overview.keyComponents.map((component, index) => (
                    <li key={index} className="text-gray-700">{component}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile Development Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Development Stages</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Planning and requirements gathering</li>
                      <li>UI/UX design and prototyping</li>
                      <li>Frontend and backend development</li>
                      <li>Testing and quality assurance</li>
                      <li>App store submission and deployment</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Challenges</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Platform fragmentation</li>
                      <li>Performance optimization</li>
                      <li>Battery efficiency</li>
                      <li>Security considerations</li>
                      <li>App store approval process</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              {content.roadmap.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="bg-purple-600 p-4">
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
                  <div className="bg-purple-600 p-4 flex items-center">
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
                              <span className="font-medium text-purple-600 group-hover:text-purple-800">
                                {item.name}
                              </span>
                              <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Platform Comparison Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mobile Development Platforms</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { 
                  name: "Native Android", 
                  icon: "🤖", 
                  tech: "Kotlin, Java",
                  pros: "Best performance, full feature access",
                  cons: "Android only, steeper learning curve"
                },
                { 
                  name: "Native iOS", 
                  icon: "🍏", 
                  tech: "Swift, Objective-C",
                  pros: "Optimized for Apple devices",
                  cons: "iOS only, requires Mac"
                },
                { 
                  name: "Flutter", 
                  icon: "🎯", 
                  tech: "Dart",
                  pros: "Cross-platform, fast development",
                  cons: "Larger app size, newer ecosystem"
                },
                { 
                  name: "React Native", 
                  icon: "⚛️", 
                  tech: "JavaScript",
                  pros: "Cross-platform, uses React",
                  cons: "Performance limitations"
                },
                { 
                  name: "Xamarin", 
                  icon: "🔷", 
                  tech: "C#",
                  pros: ".NET integration, mature",
                  cons: "Larger app size, slower UI"
                },
                { 
                  name: "Ionic", 
                  icon: "📱", 
                  tech: "HTML/CSS/JS",
                  pros: "Web technologies, easy start",
                  cons: "WebView performance issues"
                }
              ].map((platform, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors hover:shadow-sm"
                >
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <h3 className="font-medium text-gray-800">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{platform.tech}</p>
                  <div className="mt-3">
                    <p className="text-xs text-green-600 font-medium">Pros: {platform.pros}</p>
                    <p className="text-xs text-red-600 font-medium mt-1">Cons: {platform.cons}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mobile Development Career Paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Android Developer",
                  salary: "$80k - $140k",
                  skills: ["Kotlin", "Android SDK", "Jetpack"],
                  companies: ["Startups", "Tech firms", "Digital agencies"]
                },
                {
                  title: "iOS Developer",
                  salary: "$85k - $150k",
                  skills: ["Swift", "UIKit/SwiftUI", "Core Data"],
                  companies: ["Apple ecosystem companies", "Mobile agencies"]
                },
                {
                  title: "Flutter Developer",
                  salary: "$75k - $130k",
                  skills: ["Dart", "Widgets", "State management"],
                  companies: ["Cross-platform projects", "Startups"]
                }
              ].map((path, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-purple-600 mb-2">{path.title}</h3>
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